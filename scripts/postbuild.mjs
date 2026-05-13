import { readFile, writeFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import JavaScriptObfuscator from 'javascript-obfuscator'
import { minify as minifyHtml } from 'html-minifier-terser'

const distDir = path.resolve('dist')
const assetsDir = path.join(distDir, 'assets')

async function getFiles(dir, extension) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map(async entry => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return getFiles(fullPath, extension)
    }

    return fullPath.endsWith(extension) ? [fullPath] : []
  }))

  return files.flat()
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function normaliseBaseUrl(url) {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

function getCanonicalBaseUrl(html) {
  const canonicalMatch = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)
  const ogUrlMatch = html.match(/<meta\s+[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*>/i)
  const url = canonicalMatch?.[1] ?? ogUrlMatch?.[1] ?? 'https://bicknell.uk/'

  return normaliseBaseUrl(new URL(url).origin)
}

function htmlFileToRoute(file) {
  const relativePath = path.relative(distDir, file).replaceAll(path.sep, '/')

  if (relativePath === 'index.html') {
    return '/'
  }

  if (!relativePath.endsWith('/index.html')) {
    return `/${relativePath.replace(/\.html$/, '')}`
  }

  return `/${relativePath.replace(/\/index\.html$/, '/')}`
}

async function generateSitemap() {
  const htmlFiles = await getFiles(distDir, '.html')
  const indexHtml = await readFile(path.join(distDir, 'index.html'), 'utf8')
  const baseUrl = getCanonicalBaseUrl(indexHtml)

  const entries = await Promise.all(htmlFiles.map(async file => {
    const route = htmlFileToRoute(file)
    const { mtime } = await stat(file)

    return {
      loc: `${baseUrl}${route === '/' ? '/' : route}`,
      lastmod: mtime.toISOString().split('T')[0]
    }
  }))

  const uniqueEntries = [...new Map(entries
    .sort((a, b) => a.loc.localeCompare(b.loc))
    .map(entry => [entry.loc, entry])).values()]

  const urls = uniqueEntries.map(entry => [
    '  <url>',
    `    <loc>${escapeXml(entry.loc)}</loc>`,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    '    <priority>1.0</priority>',
    '  </url>'
  ].join('\n')).join('\n')

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    ''
  ].join('\n')

  await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)

  return `${baseUrl}/sitemap.xml`
}

async function generateRobotsTxt(sitemapUrl) {
  const robots = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${sitemapUrl}`,
    ''
  ].join('\n')

  await writeFile(path.join(distDir, 'robots.txt'), robots)
}

async function minifyIndexHtml() {
  const htmlPath = path.join(distDir, 'index.html')
  const html = await readFile(htmlPath, 'utf8')

  const minified = await minifyHtml(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true
  })

  await writeFile(htmlPath, minified)
}

async function obfuscateJsAssets() {
  const jsFiles = await getFiles(assetsDir, '.js')

  await Promise.all(jsFiles.map(async file => {
    const code = await readFile(file, 'utf8')

    const obfuscated = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: false,
      deadCodeInjection: false,
      debugProtection: false,
      disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal',
      numbersToExpressions: false,
      renameGlobals: false,
      selfDefending: false,
      simplify: true,
      splitStrings: false,
      stringArray: true,
      stringArrayEncoding: ['base64'],
      stringArrayThreshold: 0.35
    })

    await writeFile(file, obfuscated.getObfuscatedCode())
  }))
}

await minifyIndexHtml()
const sitemapUrl = await generateSitemap()
await generateRobotsTxt(sitemapUrl)
await obfuscateJsAssets()

console.log('Post-build complete: HTML minified, sitemap and robots.txt generated and JavaScript obfuscated.')

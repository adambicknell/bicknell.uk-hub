# bicknell.uk hub

A simple React and Vite landing page for `bicknell.uk`.

It acts as a clean personal hub for Adam Bicknell, linking to:

1. Developer portfolio
2. Personal site
3. Bicknell Digital

The project keeps things deliberately small. No CSS frameworks. No component libraries. Just React, Vite and plain CSS.

## Screenshot reference

The original visual mockup is included at:

```text
docs/mockup-reference.png
```

## Tech stack

React  
Vite  
Plain CSS  
Inline SVG icons  
Post-build HTML minification  
Post-build JavaScript obfuscation

## Getting started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Production build behaviour

The production build does the following:

1. Builds the app with Vite
2. Minifies JavaScript and CSS
3. Removes console output and debugger statements
4. Minifies the generated HTML
5. Obfuscates built JavaScript assets

The output is created in:

```bash
dist
```

## Project structure

```text
bicknell-uk-hub
├── docs
│   └── mockup-reference.png
├── scripts
│   └── postbuild.mjs
├── src
│   ├── components
│   │   └── Icons.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── LICENSE
└── README.md
```

## Links to update

The social links live in `src/data/hubData.ts`.

Update these values before publishing if you want to change YouTube, X, GitLab or any other profile URL:

```js
const socials = [
  // ...
]
```

You can also update the main card links in the same file:

```js
const cards = [
  // ...
]
```

## Brand colour

The Bicknell Digital card uses:

```css
#1a2035
```

## Footer year

The footer year uses JavaScript:

```js
new Date().getFullYear()
```

That keeps the year current without manual updates.

## Licence

MIT

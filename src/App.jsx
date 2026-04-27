import {
  ArrowIcon,
  BookIcon,
  BriefcaseIcon,
  CodeIcon,
  GitHubIcon,
  GitLabIcon,
  GlobeIcon,
  HomeIcon,
  LinkedInIcon,
  MailIcon,
  UserIcon,
  XIcon,
  YouTubeIcon,
  FacebookIcon,
} from "./components/Icons.jsx";

const currentYear = new Date().getFullYear();

const cards = [
  {
    title: "Developer Portfolio",
    description:
      "Portfolio for Full Stack React, TypeScript, Python, APIs, cloud systems, internal tools, SaaS platforms and more.",
    href: "https://dev.bicknell.uk",
    cta: "dev.bicknell.uk",
    tone: "lightblue",
    icon: CodeIcon,
  },
  {
    title: "Personal Site",
    description:
      "Articles, videos, books, projects and thoughts on technology, productivity, business and life.",
    href: "https://adam.bicknell.uk",
    cta: "adam.bicknell.uk",
    tone: "blue",
    icon: BookIcon,
  },
  {
    title: "Bicknell Digital",
    description:
      "Websites, digital systems, e-commerce, consulting and ongoing digital support for businesses.",
    href: "https://www.bicknelldigital.co.uk",
    cta: "bicknelldigital.co.uk",
    tone: "brand",
    icon: BriefcaseIcon,
  },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/adambicknell",
    icon: GitHubIcon,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/adamb-linelab",
    icon: GitLabIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/dambicknell",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adamrbicknell",
    icon: LinkedInIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: YouTubeIcon,
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: XIcon,
  },
  {
    name: "Website",
    href: "https://adam.bicknell.uk",
    icon: GlobeIcon,
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="bicknell.uk home">
        <span className="brand-mark">AB</span>
        <span className="brand-name">bicknell.uk</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a className="nav-link nav-link-active" href="/">
          <HomeIcon />
          Home
        </a>
        <a className="nav-link" href="https://adam.bicknell.uk/about">
          <UserIcon />
          About
        </a>
        <a className="nav-link" href="mailto:adam@bicknell.uk">
          <MailIcon />
          Contact
        </a>
      </nav>
    </header>
  );
}

function HubCard({ card }) {
  const Icon = card.icon;

  return (
    <article className={`hub-card hub-card-${card.tone}`}>
      <div className="icon-wrap" aria-hidden="true">
        <Icon />
      </div>

      <h2>{card.title}</h2>
      <p>{card.description}</p>

      <a className="card-button" href={card.href}>
        <span>{card.cta}</span>
        <ArrowIcon />
      </a>
    </article>
  );
}

function SocialLink({ social }) {
  const Icon = social.icon;

  return (
    <a className="social-link" href={social.href} aria-label={social.name}>
      <Icon />
    </a>
  );
}

function App() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-inner">
            <h1>Adam Bicknell</h1>
            <p className="subtitle">
              Software engineer, builder, and founder of Bicknell Digital.
            </p>
            <span className="divider" aria-hidden="true" />
            <p className="intro">
              I build practical software for real business workflows, write
              about technology and life, and help businesses grow through
              digital solutions.
            </p>
          </div>
        </section>

        <section className="hub-grid" aria-label="Main links">
          {cards.map((card) => (
            <HubCard key={card.title} card={card} />
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <p>Connect with me</p>

        <div className="social-links">
          {socials.map((social) => (
            <SocialLink key={social.name} social={social} />
          ))}
        </div>

        <small>© {currentYear} Adam Bicknell. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;

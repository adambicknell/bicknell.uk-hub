import { MailIcon } from "./Icons";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="bicknell.uk home">
        <img
          className="brand-mark"
          src="/adam1.jpg"
          alt="Adam Bicknell"
          width="56"
          height="56"
        />
        <span className="brand-name">bicknell.uk</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a className="nav-link" href="mailto:adam@bicknell.uk">
          <MailIcon />
          Contact
        </a>
      </nav>
    </header>
  );
}

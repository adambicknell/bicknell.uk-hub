import SocialLink from "./SocialLink";
import type { SocialLinkItem } from "../types";

const currentYear = new Date().getFullYear();

interface FooterProps {
  socials: SocialLinkItem[];
}

export default function Footer({ socials }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>Connect with me</p>

      <div className="social-links">
        {socials.map((social) => (
          <SocialLink key={social.name} social={social} />
        ))}
      </div>

      <small>© {currentYear} Adam Bicknell. All rights reserved.</small>
    </footer>
  );
}

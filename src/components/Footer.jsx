import SocialLink from "./SocialLink.jsx";

const currentYear = new Date().getFullYear();

export default function Footer({ socials }) {
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

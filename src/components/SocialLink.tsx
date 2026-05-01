import type { SocialLinkItem } from "../types";

interface SocialLinkProps {
  social: SocialLinkItem;
}

export default function SocialLink({ social }: SocialLinkProps) {
  const Icon = social.icon;

  return (
    <a
      className="social-link"
      href={social.href}
      aria-label={social.name}
      target="_blank"
      rel="noreferrer"
      title={social.name}
    >
      <Icon />
    </a>
  );
}

export default function SocialLink({ social }) {
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

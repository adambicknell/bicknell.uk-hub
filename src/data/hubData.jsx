import {
  BookIcon,
  BriefcaseIcon,
  CodeIcon,
  GitHubIcon,
  GitLabIcon,
  GlobeIcon,
  LinkedInIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "../components/Icons.jsx";

export const cards = [
  {
    title: "Dev Portfolio",
    description:
      "Portfolio for Full Stack React, TypeScript, Python, APIs, cloud systems, tools, SaaS platforms etc.",
    href: "https://dev.bicknell.uk",
    cta: "dev.bicknell.uk",
    tone: "lightblue",
    icon: CodeIcon,
  },
  {
    title: "Personal Site",
    description:
      "Articles, books, videos and thoughts on technology, business, personal growth and deeper thought.",
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

export const socials = [
  { name: "GitHub", href: "https://github.com/adambicknell", icon: GitHubIcon },
  { name: "GitLab", href: "https://gitlab.com/adamb-linelab", icon: GitLabIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adamrbicknell", icon: LinkedInIcon },
  { name: "Facebook", href: "https://www.facebook.com/dambicknell", icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/dambicknell", icon: InstagramIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@dambicknell", icon: TikTokIcon },
  { name: "X", href: "https://x.com/dambicknell", icon: XIcon },
  { name: "Personal Website", href: "https://adam.bicknell.uk", icon: GlobeIcon },
];

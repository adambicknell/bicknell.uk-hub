const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

export function HomeIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M3 11.4 12 4l9 7.4v8.1a.5.5 0 0 1-.5.5H15v-6H9v6H3.5a.5.5 0 0 1-.5-.5v-8.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c0-3.31 3.13-6 7-6s7 2.69 7 6H5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm8 7 8-5H4l8 5Zm0 2L5 10.6V16h14v-5.4L12 15Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="m9.4 7.2-5 4.8 5 4.8 1.4-1.5L7.4 12l3.4-3.3-1.4-1.5Zm5.2 0-1.4 1.5 3.4 3.3-3.4 3.3 1.4 1.5 5-4.8-5-4.8ZM12 18.5l-2-.5L12 5.5l2 .5-2 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M4.5 5.5C6.1 4.6 7.8 4 10 4c1 0 1.7.3 2 .9.3-.6 1-.9 2-.9 2.2 0 3.9.6 5.5 1.5V18c-1.5-.8-3.2-1.3-5-1.3-1.4 0-2.2.4-2.5 1.1-.3-.7-1.1-1.1-2.5-1.1-1.8 0-3.5.5-5 1.3V5.5Zm2 1.2v8.4c1-.3 2-.4 3-.4.8 0 1.6.1 2.5.5V7c-.5-.6-1.3-1-2.4-1-1.2 0-2.1.2-3.1.7Zm11 0c-1-.5-1.9-.7-3.1-.7-1.1 0-1.9.4-2.4 1v8.2c.9-.4 1.7-.5 2.5-.5 1 0 2 .1 3 .4V6.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M9 5h6a2 2 0 0 1 2 2v1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V7a2 2 0 0 1 2-2Zm1 3h4V7h-4v1Zm-5 2v3h6v-1h2v1h6v-3H5Zm14 5h-6v1h-2v-1H5v3h14v-3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M13.5 5 12 6.5 16.5 11H4v2h12.5L12 17.5l1.5 1.5 7-7-7-7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2.1 1-2.8-.1-.3-.4-1.3.1-2.8 0 0 .8-.3 2.8 1.1.8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 2-1.4 2.8-1.1 2.8-1.1.5 1.5.2 2.5.1 2.8.6.7 1 1.7 1 2.8 0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitLabIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="m22 13.1-.1-.4-2-6.2c-.1-.4-.7-.4-.9 0l-1.9 5.8H6.9L5 6.5c-.2-.4-.8-.4-.9 0l-2 6.2-.1.4c-.1.3 0 .7.3.9L12 21l9.7-7c.3-.2.4-.6.3-.9ZM6.3 13.9l2.1 3.2-4.3-3.2h2.2Zm3 3.8-2.5-3.8h10.4l-2.5 3.8-2.7 2-2.7-2Zm6.3-.6 2.1-3.2h2.2l-4.3 3.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M5 6.8a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM3.3 21V8.5h3.4V21H3.3Zm5.6 0V8.5h3.3v1.7h.1c.5-.9 1.6-2 3.4-2 3.6 0 4.3 2.4 4.3 5.5V21h-3.4v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H8.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YouTubeIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.3V8.7l5.5 3.3-5.5 3.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M14.2 10.5 21.8 2h-2.4l-6.3 7.1L8.1 2H2l8 11.4L2.4 22h2.4l6.4-7.2 5.1 7.2h6.1l-8.2-11.5Zm-2 2.2-1.1-1.5L5.9 3.8H7l4.8 6.8 1.1 1.5 5.4 7.8h-1.1l-5-7.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.2a15 15 0 0 0-1.1-5 8 8 0 0 1 4.3 5ZM12 4.1c.8 1.1 1.5 3.7 1.7 6.9h-3.4c.2-3.2.9-5.8 1.7-6.9ZM4.3 13h3.9c.1 1.8.4 3.5.9 4.9A8 8 0 0 1 4.3 13Zm3.9-2H4.3a8 8 0 0 1 4.8-4.9A19 19 0 0 0 8.2 11Zm3.8 8.9c-.8-1.1-1.5-3.7-1.7-6.9h3.4c-.2 3.2-.9 5.8-1.7 6.9Zm2.9-2c.5-1.4.8-3.1.9-4.9h3.9a8 8 0 0 1-4.8 4.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M22 12.1C22 6.5 17.5 2 12 2S2 6.5 2 12.1c0 5 3.7 9.1 8.4 9.9v-7H7.9v-2.9h2.5V9.9c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7C18.3 21.2 22 17.1 22 12.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.1A4.9 4.9 0 1 1 12 16.9a4.9 4.9 0 0 1 0-9.8Zm0 2A2.9 2.9 0 1 0 12 15a2.9 2.9 0 0 0 0-5.8Zm5.1-2.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TikTokIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path
        d="M15.2 2c.3 2.4 1.7 3.8 4.1 4v3.1a7.2 7.2 0 0 1-4.1-1.3v6.8a6 6 0 1 1-6-6c.4 0 .8 0 1.1.1v3.4a2.7 2.7 0 1 0 1.7 2.5V2h3.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

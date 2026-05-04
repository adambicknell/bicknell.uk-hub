import { SiApache, SiReact, SiTypescript, SiVite } from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Vite", icon: SiVite },
  { name: "Apache", icon: SiApache },
];

export default function TechStackSection() {
  return (
    <section
      className="tech-stack"
      aria-label="Technologies used to build this site"
    >
      <p className="tech-stack-label">Made with</p>
      <ul className="tech-stack-logos" role="list">
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
            <li key={technology.name} className="tech-logo-card">
              <span className="tech-logo-mark" aria-hidden="true">
                <Icon />
              </span>
              <span className="tech-logo-name">{technology.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

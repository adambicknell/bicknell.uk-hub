import { ArrowIcon } from "./Icons.jsx";

export default function HubCard({ card, descriptionRef, descriptionHeight }) {
  const Icon = card.icon;

  return (
    <article className={`hub-card hub-card-${card.tone}`}>
      <div className="icon-wrap" aria-hidden="true">
        <Icon />
      </div>

      <h2>{card.title}</h2>

      <p
        ref={descriptionRef}
        className="hub-card-description"
        style={descriptionHeight ? { minHeight: `${descriptionHeight}px` } : undefined}
      >
        {card.description}
      </p>

      <a className="card-button" href={card.href} target="_blank" rel="noreferrer">
        <span>{card.cta}</span>
        <ArrowIcon />
      </a>
    </article>
  );
}

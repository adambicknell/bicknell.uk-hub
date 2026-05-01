import { ArrowIcon } from "./Icons";
import type { RefCallback } from "react";
import type { HubCardItem } from "../types";

interface HubCardProps {
  card: HubCardItem;
  descriptionRef: RefCallback<HTMLParagraphElement>;
  descriptionHeight: number;
}

export default function HubCard({ card, descriptionRef, descriptionHeight }: HubCardProps) {
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

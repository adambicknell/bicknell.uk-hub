import type { ComponentType } from "react";

export type IconComponent = ComponentType;

export interface HubCardItem {
  title: string;
  description: string;
  href: string;
  cta: string;
  tone: string;
  icon: IconComponent;
}

export interface SocialLinkItem {
  name: string;
  href: string;
  icon: IconComponent;
}

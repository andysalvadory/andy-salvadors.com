import * as React from 'react';

export interface AccordionProps {
  dataHook?: string;
  multiple?: boolean;
  items?: AccordionItem[];
  skin?: "light" | "standard";
}

export interface AccordionItem {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  expandLabel?: React.ReactNode;
  collapseLabel?: React.ReactNode;
  buttonType?: AccordionItemButtonType;
  skin?: "light" | "standard";
}

export type AccordionItemButtonType = "textButton" | "button";

export default class Accordion extends React.Component<AccordionProps> {}

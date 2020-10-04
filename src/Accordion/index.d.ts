import * as React from 'react';

export type AccordionItemButtonType = 'textButton' | 'button';
export type AccordionSkinType = 'standard' | 'light';

export interface AccordionProps {
  dataHook?: string;
  multiple?: boolean;
  items?: AccordionItem[];
  skin?: AccordionSkinType;
  hideShadow?: boolean;
}

export interface AccordionItem {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  expandLabel?: React.ReactNode;
  collapseLabel?: React.ReactNode;
  buttonType?: AccordionItemButtonType;
  open?: boolean;
  initiallyOpen?: boolean;
  disabled?: boolean;
  onToggle?: React.MouseEventHandler<HTMLElement>;
}

export default class Accordion extends React.Component<AccordionProps> {}

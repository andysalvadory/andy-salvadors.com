import * as React from 'react';

export interface AccordionItemProps {
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

type AccordionItemButtonType = 'textButton' | 'button';
export type AccordionSkinType = 'standard' | 'light';

export default class AccordionItem extends React.Component<
  AccordionItemProps
> {}

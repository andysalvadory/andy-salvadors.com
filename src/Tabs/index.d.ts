import * as React from 'react';

export interface TabsProps {
  activeId?: string | number;
  dataHook?: string;
  hasDivider?: boolean;
  items: Item[];
  minWidth?: string | number;
  type?: '' | 'compact' | 'compactSide' | 'uniformSide' | 'uniformFull';
  sideContent?: React.ReactNode;
  width?: string | number;
  onClick?: (item: Item) => void;
}

export type Item = {
  id: string | number;
  title: React.ReactNode;
  dataHook?: string;
};

export default class Tabs extends React.PureComponent<TabsProps> {}

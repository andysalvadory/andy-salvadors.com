import * as React from 'react';

export type ModalTheme = 'standard' | 'premium' | 'destructive';

export interface BaseModalLayoutProps {
  className?: string;
  dataHook?: string;
  theme?: ModalTheme;
  onCloseButtonClick?(): void;
}

declare const BaseModalLayout: React.FC<BaseModalLayoutProps>;
export default BaseModalLayout;

export * from './LayoutBlocks';

import * as React from 'react';

export interface ModalPreviewLayoutProps {
  dataHook?: string;
  actions?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  shouldCloseOnOverlayClick?: boolean;
}

export default class ModalPreviewLayout extends React.PureComponent<
  ModalPreviewLayoutProps
> {}

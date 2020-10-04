import * as React from 'react';
import WixComponent, {
  WixComponentProps,
} from '../BaseComponents/WixComponent';

export interface PageHeaderProps extends WixComponentProps {
  minimized?: boolean;
  hasBackgroundImage?: boolean;
  className?: string;
  breadcrumbs?: React.ReactNode | BreadcrumbsRenderFn;
  title?: React.ReactNode | TitleRenderFn;
  subtitle?: React.ReactNode;
  showBackButton?: boolean;
  onBackClicked?: React.MouseEventHandler<HTMLButtonElement>;
  actionsBar?: React.ReactNode | ActionsBarRenderFn;
}

export default class PageHeader extends WixComponent<PageHeaderProps> {}

type TitleRenderFn = (minimized: boolean) => React.ReactNode;
type BreadcrumbsRenderFn = (minimized: boolean) => React.ReactNode;

type ActionsBarRenderFn = (data: {
  minimized: boolean;
  hasBackgroundImage: boolean;
}) => React.ReactNode;

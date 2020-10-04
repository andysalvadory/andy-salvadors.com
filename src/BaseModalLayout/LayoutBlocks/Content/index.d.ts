import * as React from 'react';
import { ScrollChangedData } from '../../../common/ScrollableContainer';

export interface ContentProps {
  className?: string;
  dataHook?: string;
  content?: string | React.ReactNode;
  contentHideDividers?: boolean;
  onContentScrollPositionChanged?(scrollChangedData: ScrollChangedData): void;
}

export const Content: React.FunctionComponent<ContentProps>;

import * as React from 'react';
import { ScrollChangedData } from '../../../common/ScrollableContainer';

export interface ContentProps {
  content?: string | React.ReactNode;
  contentMaxHeight?: string | number;
  contentHideDividers?: boolean;
  onContentScrollPositionChanged?(scrollChangedData: ScrollChangedData): void;
}

export const Content: React.FunctionComponent<ContentProps>;

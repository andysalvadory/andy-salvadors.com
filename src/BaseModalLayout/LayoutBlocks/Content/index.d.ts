import * as React from 'react';

export interface ContentProps {
  className?: string;
  dataHook?: string;
  content?: string | React.ReactNode;
  contentHideDividers?: boolean;
}

export const Content: React.FunctionComponent<ContentProps>;

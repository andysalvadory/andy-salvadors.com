import * as React from 'react';
import WixComponent, {WixComponentProps } from '../BaseComponents/WixComponent';

export interface NestableListProps extends WixComponentProps {
  items?: object[];
  isRenderDraggingChildren?: boolean;
  childrenProperty?: string;
  childrenStyle?: React.CSSProperties;
  onUpdate?: (data: { items: object[]; item: object }) => void;
  useDragHandle?: boolean;
  maxDepth?: number;
  threshold?: number;
  onDragStart?: (itemProps: any) => void;
  onDragEnd?: (itemProps: any) => void;
  renderItem?: (data: {
    isPlaceholder: boolean;
    depth: number;
    isPreview: boolean;
    connectDragSource: any;
    item: object;
  }) => React.ReactNode;
}

export default class NestableList extends WixComponent<NestableListProps> {}

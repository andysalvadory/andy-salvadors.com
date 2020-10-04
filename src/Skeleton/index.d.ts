import WixComponent, {WixComponentProps } from '../BaseComponents/WixComponent';

export interface SkeletonProps extends WixComponentProps {
  content: SkeletonContent[];
  alignment?: SkeletonAlignment;
  spacing?: SkeletonSpacing;
  className?: string;
}

export default class Skeleton extends WixComponent<SkeletonProps> {}

export type SkeletonContent = {
  type: SkeletonContentType;
  size: SkeletonContentSize;
};
export type SkeletonContentType = 'line';
export type SkeletonContentSize = 'small' | 'medium' | 'large' | 'full';
export type SkeletonAlignment = 'start' | 'middle';
export type SkeletonSpacing = 'small' | 'medium' | 'large';

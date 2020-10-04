import * as React from 'react';
import { TagProps } from '../Tag';
import { ButtonProps } from '../Button';

export type TagListSize = 'small' | 'medium' | 'large';

export type TagListProps = {
  dataHook?: string;
  tags: Array<TagProps>;
  size?: TagListSize;
  actionButton?: TagListActionButtonProps;
};

type TagListActionButtonProps = ButtonProps & {
  label?: string;
};

export default class TagList extends React.PureComponent<TagListProps> {}

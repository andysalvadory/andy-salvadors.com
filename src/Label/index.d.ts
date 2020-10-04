import * as React from 'react';

export type LabelProps = import('wix-ui-core/label').LabelProps &
  import('wix-ui-core/dist/src/createHOC').WixComponentProps &
  import('wix-ui-backoffice/dist/src/components/Label/Label').LabelProps;

export default class Label extends React.PureComponent<LabelProps> {}

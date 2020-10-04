import * as React from 'react';

export interface FileUploadProps {
  dataHook?: string;
  className?: string;
  children: React.ClassicElement<any>;
  multiple?: boolean;
  accept?: string;
  capture?: 'user' | 'environment';
  onChange(fileList: FileList): void;
}

export default class FileUpload extends React.PureComponent<FileUploadProps> {}

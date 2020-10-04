import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { InputSize, InputStatus } from '../Input';

export interface ColorInputUniDriver extends BaseUniDriver {
  cancel(): Promise<void>;
  confirm(): Promise<void>;
  clickColorViewer(): Promise<void>;
  enterText: (text: string) => Promise<void>;
  getValue(): Promise<string>;
  hasError(): Promise<boolean>;
  getPlaceholder(): Promise<string | null>;
  getSize(): Promise<InputSize | null>;
  isDisabled(): Promise<boolean>;
  colorPickerVisible(): Promise<boolean>;

  // TOOD - uncomment in wsr8
  // Status
  // hasStatus(): Promise<boolean>;
  // getStatus(): Promise<InputStatus>;
  // hasStatusMessage(): Promise<boolean>;
  // getStatusMessage(): Promise<string>;
}

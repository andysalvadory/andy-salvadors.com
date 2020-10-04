import InputWithOptions, {
  ManualInputFnSignature,
  OnSelectFnSignature,
  InputWithOptionsProps,
} from '../InputWithOptions';
import  {
  DropdownLayoutValueOption
} from '../DropdownLayout';

export interface AutoCompleteProps extends InputWithOptionsProps {
  predicate?: (option: DropdownLayoutValueOption) => boolean;
  emptyStateMessage?: string;
}

export default class AutoComplete extends InputWithOptions<
  ManualInputFnSignature,
  OnSelectFnSignature,
  AutoCompleteProps
> {}

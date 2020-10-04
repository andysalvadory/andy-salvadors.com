import AutoComplete from './AutoComplete';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(AutoComplete);

metadata.exportedFrom({
  path: 'src/AutoComplete/AutoComplete.js',
});

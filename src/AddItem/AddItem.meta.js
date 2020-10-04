import AddItem from './AddItem';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(AddItem);

metadata.exportedFrom({
  path: 'src/AddItem/AddItem.js',
});

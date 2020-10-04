import Search from './Search';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Search);

metadata.exportedFrom({
  path: 'src/Search/Search.js',
});

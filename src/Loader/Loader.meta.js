import Loader from './Loader';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Loader);

metadata.exportedFrom({
  path: 'src/Loader/Loader.js',
});

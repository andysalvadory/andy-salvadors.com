import Thumbnail from './Thumbnail';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Thumbnail);

metadata.exportedFrom({
  path: 'src/Thumbnail/Thumbnail.js',
});

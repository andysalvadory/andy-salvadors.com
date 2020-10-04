import ImageViewer from './ImageViewer';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(ImageViewer);

metadata.exportedFrom({
  path: 'src/ImageViewer/ImageViewer.js',
});

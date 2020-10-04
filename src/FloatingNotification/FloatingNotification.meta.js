import FloatingNotification from './FloatingNotification';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(FloatingNotification);

metadata.exportedFrom({
  path: 'src/FloatingNotification/FloatingNotification.js',
});

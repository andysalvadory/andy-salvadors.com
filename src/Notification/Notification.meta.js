import Notification from './Notification';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Notification);

metadata.exportedFrom({
  path: 'src/Notification/Notification.js',
});

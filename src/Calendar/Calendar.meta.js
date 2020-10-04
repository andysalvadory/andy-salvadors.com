import Calendar from './Calendar';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Calendar);

metadata.exportedFrom({
  path: 'src/Calendar/Calendar.js',
});

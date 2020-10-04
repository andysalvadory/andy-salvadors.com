import Button from './Button';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Button);

metadata.exportedFrom({
  path: 'src/Button/Button.js',
});

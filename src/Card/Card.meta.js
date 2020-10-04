import Card from './Card';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Card);

metadata.exportedFrom({
  path: 'src/Card/Card.js',
});

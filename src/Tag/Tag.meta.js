import Tag from './Tag';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Tag);

metadata.exportedFrom({
  path: 'src/Tag/Tag.js',
});

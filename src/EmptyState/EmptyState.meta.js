import EmptyState from './EmptyState';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(EmptyState);

metadata.exportedFrom({
  path: 'src/EmptyState/EmptyState.js',
});

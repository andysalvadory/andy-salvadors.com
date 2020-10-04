import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import { version } from '../package.json';
import '../src/assets/helvetica.scss';

function loadStories() {
  require('./stories.scss');
  require('../stories');
}

configure(loadStories, module);

setOptions({
  showAddonPanel: false,
  name: `wix-style-react v${version}`,
  url: 'https://github.com/wix/wix-style-react',
  sidebarAnimations: false,
});

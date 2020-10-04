import React from 'react';
import { storiesOf } from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../README.md';
import TestingReadme from '../../docs/usage/testing.md';
import TroubleshootingReadme from '../../docs/usage/Troubleshooting.md';
import UsageWithoutYoshiReadme from '../../docs/usage-without-yoshi.md';

import ComponentsCheatsheet from './Cheatsheet/ComponentsCheatsheet';

storiesOf('Introduction', module)
  .add('Getting started', () => <Markdown source={Readme} />)
  .add('Components Cheatsheet', () => <ComponentsCheatsheet />)
  .add('Usage Without Yoshi', () => (
    <Markdown source={UsageWithoutYoshiReadme} />
  ))
  .add('Testing', () => (
    <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
      <Markdown source={TestingReadme} />
    </div>
  ))
  .add('Troubleshooting', () => (
    <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
      <Markdown source={TroubleshootingReadme} />
    </div>
  ));

//TODO - add contribution docs links here somehow

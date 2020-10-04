import React from 'react';
import { storiesOf } from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../README.md';
import Migration from '../../MIGRATION.md';
import Contributing from '../../CONTRIBUTING.md';
import TestingOverview from '../../docs/usage/testing_overview.md';
import TestingBestPractices from '../../docs/usage/testing_best_practices.md';
import TestingExampleVanilla from '../../docs/usage/testing_example_vanilla.md';
import TestingExampleEnzyme from '../../docs/usage/testing_example_enzyme.md';
import TestingExamplePuppeteer from '../../docs/usage/testing_example_puppeteer.md';
import TestingExampleProtractor from '../../docs/usage/testing_example_protractor.md';
import TroubleshootingReadme from '../../docs/usage/Troubleshooting.md';
import UsageWithoutYoshiReadme from '../../docs/usage-without-yoshi.md';

import ComponentsCheatsheet from './Cheatsheet/ComponentsCheatsheet';

import { Category } from '../storiesHierarchy';

storiesOf(Category.GETTINGSTARTED, module).add('Getting started', () => (
  <Markdown source={Readme} />
));

storiesOf(Category.GETTINGSTARTED, module).add('Migrating to wsr8', () => (
  <Markdown source={Migration} />
));

require('../MadeforFont/index.story');

storiesOf(Category.GETTINGSTARTED, module).add('Contributing', () => (
  <Markdown source={Contributing} />
));

storiesOf(Category.GETTINGSTARTED, module).add('Usage Without Yoshi', () => (
  <Markdown source={UsageWithoutYoshiReadme} />
));

storiesOf(Category.CHEATSHEET, module).add('Components Cheatsheet', () => (
  <ComponentsCheatsheet />
));

storiesOf(Category.TESTING, module).add('Overview', () => (
  <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
    <Markdown source={TestingOverview} />
  </div>
));

storiesOf(Category.TESTING, module).add('React tesing library', () => (
  <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
    <Markdown source={TestingExampleVanilla} />
  </div>
));

storiesOf(Category.TESTING, module).add('Enzyme', () => (
  <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
    <Markdown source={TestingExampleEnzyme} />
  </div>
));

storiesOf(Category.TESTING, module).add('Puppeteer', () => (
  <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
    <Markdown source={TestingExamplePuppeteer} />
  </div>
));

storiesOf(Category.TESTING, module).add('Protractor', () => (
  <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
    <Markdown source={TestingExampleProtractor} />
  </div>
));

storiesOf(Category.TESTING, module).add('Best Practices', () => (
  <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
    <Markdown source={TestingBestPractices} />
  </div>
));

storiesOf(Category.TROUBLESHOOTING, module).add('Troubleshooting', () => (
  <div style={{ margin: '0 48px', width: '100%', maxWidth: 1161 }}>
    <Markdown source={TroubleshootingReadme} />
  </div>
));

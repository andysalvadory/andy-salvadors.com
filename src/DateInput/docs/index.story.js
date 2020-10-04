import React from 'react';
import { storySettings } from './storySettings';
import {
  header,
  tabs,
  tab,
  code as baseCode,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import allComponents from '../../../stories/utils/allComponents';
import DateInput from 'wix-style-react/DateInput';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: DateInput,
  componentPath: '../DateInput.js',

  componentProps: {
    dateFormat: 'DD/MM/YYYY',
    value: new Date().toString(),
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/DateInput',
      component: (
        <div style={{ width: '50%' }}>
          <DateInput value={new Date().toString()} dateFormat="DD/MM/YYYY" />
        </div>
      ),
    }),
    tabs({
      tabs: [
        ...[
          { title: 'API', sections: [api()] },
          { title: 'Testkit', sections: [testkit()] },
          { title: 'Playground', sections: [playground()] },
        ].map(tab),
      ],
    }),
  ],
};

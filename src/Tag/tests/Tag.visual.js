import React from 'react';
import { storiesOf } from '@storybook/react';
import { storySettings } from '../docs/storySettings';
import Tag from '../Tag';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

const { dataHook } = storySettings;

const tests = [
  {
    describe: 'thumb variations',
    its: [
      {
        it: 'LTR & RTL',
        props: {
          title: 'Card Title',
        },
      },
    ],
  },
];

const renderThumbnails = () => {
  return (
    <div>
      <div>
        sizes:
        <Tag size="tiny" children="tiny" />
        <Tag size="small" children="small" />
        <Tag size="medium" children="medium" />
        <Tag size="large" children="large" />
      </div>
      <div>
        themes:
        <Tag children="default" />
        <Tag children="error theme" theme="error" />
        <Tag children="warning theme" theme="warning" />
        <Tag children="dark theme" theme="dark" />
        <Tag children="neutral theme" theme="neutral" />
        <Tag children="light theme" theme="light" />
      </div>
      <div>
        Removable / Disabled:
        <Tag children="removable" />
        <Tag children="non-removable" removable={false} />
        <Tag children="disabled" disabled />
      </div>
      <div>
        With Thumb:
        <Tag
          children="green"
          thumb={
            <div
              style={{
                backgroundColor: 'green',
                height: '100%',
                width: '100%',
              }}
            />
          }
        />
      </div>
    </div>
  );
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Tag/${describe}`, module).add(it, () => (
      <div>
        <div dir="rtl" className="rtl">
          {renderThumbnails()}
        </div>
        {renderThumbnails()}
      </div>
    ));
  });
});

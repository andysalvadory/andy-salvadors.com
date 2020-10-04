import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from '..';
import { PhotoCamera } from 'wix-ui-icons-common';

const allSizesAvatarWithProps = props => (
  <div style={{ display: 'flex' }}>
    <Avatar size="size18" {...props} /> &nbsp;
    <Avatar size="size24" {...props} /> &nbsp;
    <Avatar size="size30" {...props} /> &nbsp;
    <Avatar size="size36" {...props} /> &nbsp;
    <Avatar size="size48" {...props} /> &nbsp;
    <Avatar size="size60" {...props} /> &nbsp;
    <Avatar size="size72" {...props} /> &nbsp;
    <Avatar size="size90" {...props} />
  </div>
);
const baseProps = {
  name: 'Jhon Doe',
};

const renderAvatar = props => <Avatar {...baseProps} {...props} />;

storiesOf(`Avatar/Props`, module).add('Presence', () => (
  <div>
    <div style={{ display: 'flex', marginBottom: '30px' }}>
      {renderAvatar({ presence: 'online' })}
      {renderAvatar({ presence: 'offline' })}
      {renderAvatar({ presence: 'busy' })}
    </div>
    {allSizesAvatarWithProps({ presence: 'online', ...baseProps })}
  </div>
));

storiesOf(`Avatar/Props`, module).add('Square', () => (
  <div>{allSizesAvatarWithProps({ shape: 'square', ...baseProps })}</div>
));

storiesOf(`Avatar/Props`, module).add('Indication', () => (
  <div>
    <div style={{ display: 'flex', marginBottom: '30px' }}>
      {renderAvatar({ indication: <PhotoCamera size="24" /> })}
      {renderAvatar({
        indication: (
          <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18">
            <path
              id="addsmall-a"
              d="M10 9L10 5 9 5 9 9 5 9 5 10 9 10 9 14 10 14 10 10 14 10 14 9z"
            ></path>
          </svg>
        ),
      })}
    </div>
    {allSizesAvatarWithProps({
      indication: <PhotoCamera size="24" />,
      ...baseProps,
    })}
  </div>
));

storiesOf(`Avatar/Props`, module).add('Presence and Indication', () => (
  <div>
    {allSizesAvatarWithProps({
      presence: 'online',
      indication: <PhotoCamera size="24" />,
      ...baseProps,
    })}
    <br />
    {allSizesAvatarWithProps({
      presence: 'online',
      shape: 'square',
      indication: <PhotoCamera size="24" />,
      ...baseProps,
    })}
  </div>
));

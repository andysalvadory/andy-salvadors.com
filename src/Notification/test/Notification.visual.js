import { THEMES, ACTION_BUTTON_TYPES } from '../constants';
import React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import Notification from '..';

const themes = Object.values(THEMES);
const actions = Object.values(ACTION_BUTTON_TYPES);

const tests = [
  {
    describe: 'themes',
    its: themes.map(theme => ({
      it: theme,
      props: {
        theme,
        children: (
          <Notification.TextLabel>Notification Text</Notification.TextLabel>
        ),
      },
    })),
  },
  {
    describe: 'actions',
    its: actions.map(action => ({
      it: action,
      props: {
        children: [
          <Notification.ActionButton type={action} onClick={() => null}>
            {action}
          </Notification.ActionButton>,
          <Notification.TextLabel>Notification Text</Notification.TextLabel>,
        ],
      },
    })),
  },
  {
    describe: 'close button',
    its: [
      {
        it: 'exists',
        props: {
          children: [
            <Notification.TextLabel>Notification Text</Notification.TextLabel>,
            <Notification.CloseButton />,
          ],
        },
      },
      {
        it: 'does not exist',
        props: {
          children: (
            <Notification.TextLabel>Notification Text</Notification.TextLabel>
          ),
        },
      },
    ],
  },
];

visualize('Notification', () => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props }) => {
      story(describe, () => {
        snap(it, () => <Notification show {...props} />);
      });
    });
  });
});

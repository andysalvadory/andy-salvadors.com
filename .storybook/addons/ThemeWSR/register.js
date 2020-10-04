import React, { useState, useEffect } from 'react';
import addons, { types } from '@storybook/addons';
import { useChannel } from '@storybook/api';
import { ADDON_ID, ADDON_TITLE, PANEL_ID } from './shared';

function ThemeWSRButton() {
  const [active, setActive] = useState(false);
  const emit = useChannel({});
  useEffect(() => emit(ADDON_ID + '/change', { active }));

  return (
    <div
      style={{
        margin: 'auto 15px',
        cursor: 'pointer',
        userSelect: 'none',
        padding: '3px 8px',
        backgroundColor: active ? '#4EB7F5' : '#eee',
        color: active ? '#444' : '#999',
      }}
      onClick={() => setActive(!active)}
    >
      Theme
    </div>
  );
}

const pages = [
  'introduction-playground--playground',
  'introduction-cheatsheet--components-cheatsheet',
];

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: ADDON_TITLE,
    match: ({ viewMode, storyId }) => viewMode === 'story' && pages.includes(storyId),
    render: () => <ThemeWSRButton />,
  });
});

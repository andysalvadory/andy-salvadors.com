import React from 'react';

import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';
import TextButton from 'wix-style-react/TextButton';

const ComponentStorybookName = ({ name, isDeveloped }) => {
  let storybookName;

  if (typeof name === 'string') {
    storybookName = (
      <Text
        secondary={!isDeveloped}
        light={!isDeveloped}
        size="medium"
        weight="bold"
      >
        {name}
      </Text>
    );
  } else {
    storybookName = (
      <TextButton
        skin="dark"
        underline="onHover"
        weight="normal"
        onClick={name.url}
      >
        {name.text}
      </TextButton>
    );
  }

  return <Box marginBottom="6px">{storybookName}</Box>;
};

export default ComponentStorybookName;

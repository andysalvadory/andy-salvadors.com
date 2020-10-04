import React from 'react';

import Box from 'wix-style-react/Box';

import ComponentsNames from './ComponentsNames';
import ComponentStorybookName from './ComponentStorybookName';

const ComponentNaming = ({ name, componentsNames }) => (
  <Box direction="vertical">
    <ComponentStorybookName
      name={name}
      isDeveloped={componentsNames && componentsNames.length > 0}
    />
    {componentsNames && <ComponentsNames componentsNames={componentsNames} />}
  </Box>
);

export default ComponentNaming;

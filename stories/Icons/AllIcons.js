import React from 'react';
import Heading from '../../src/Heading';
import * as Icons from 'wix-ui-icons-common';
import { Layout, Cell } from '../../src/Layout';
import Text from '../../src/Text';
import Box from '../../src/Box';
import Input from '../../src/Input';
import Search from 'wix-ui-icons-common/Search';

const renderIcon = name => (
  <Cell span={3}>
    <Box verticalAlign="middle" height="24px">
      <Box marginRight="10px">{React.createElement(Icons[name])}</Box>
      <Text>{name}</Text>
    </Box>
  </Cell>
);

const AllIcons = () => {
  const [iconsToRender, setIconsToRender] = React.useState(Object.keys(Icons));

  const onIconFilter = ({ target }) => {
    const searchTerm = target.value.toUpperCase();
    setIconsToRender(
      Object.keys(Icons).filter(name =>
        name.toUpperCase().includes(searchTerm),
      ),
    );
  };

  return (
    <Layout>
      <Cell span={2}>
        <Heading appearance="H2">All Icons:</Heading>
      </Cell>
      <Cell vertical span={3}>
        <Input
          suffix={<Search style={{ color: '#3899EC' }} />}
          placeholder="Search Icon"
          onKeyUp={onIconFilter}
        />
      </Cell>
      <Cell>
        <Box minWidth="1000px">
          <Layout alignItems="center">{iconsToRender.map(renderIcon)}</Layout>
        </Box>
      </Cell>
    </Layout>
  );
};

export default AllIcons;

import React from 'react';
import { storiesOf } from '@storybook/react';
import CloseButton from '../index';
import { SIZES, SKINS } from '../constants';
import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';
import Help from 'wix-ui-icons-common/Help';
import {
  renderTestComponents,
  createVisualTestsByProp,
} from '../../../test/utils/visual';

const defaultProps = {
  disabled: false,
  size: SIZES.small,
  skin: SKINS.standard,
};

const customIconDefaultProps = {
  ...defaultProps,
  children: <Help />,
};

const tests = [
  {
    describe: 'Sizes',
    ...createVisualTestsByProp({
      propName: 'size',
      propValues: SIZES,
    }),
  },
  {
    describe: 'Skins',
    ...createVisualTestsByProp({
      propName: 'skin',
      propValues: SKINS,
    }),
  },
];
tests.forEach(({ describe, its }) => {
  const defaultChildren = renderTestComponents(
    { its },
    <CloseButton {...defaultProps} />,
  );

  const customIconChildren = renderTestComponents(
    { its },
    <CloseButton {...customIconDefaultProps} />,
  );

  const children = [...defaultChildren, ...customIconChildren];

  storiesOf(`CloseButton/${describe}`, module).add(describe, () => (
    <Layout>
      <Cell span={children.length}>{children}</Cell>
    </Layout>
  ));
});

//TODO: refactoring it to be in the tests array
storiesOf(`CloseButton/Skins`, module).add('skins- medium', () => (
  <Layout>
    <Cell span={12}>
      <Box padding="3px">
        <CloseButton {...defaultProps} size={SIZES.medium} />
      </Box>
      <Box padding="3px">
        <CloseButton {...customIconDefaultProps} size={SIZES.medium} />
      </Box>
      <Box padding="3px">
        <CloseButton {...customIconDefaultProps} size={SIZES.medium} />
      </Box>
      <Box>
        <CloseButton
          {...defaultProps}
          skin={SKINS.standardFilled}
          size={SIZES.medium}
        />
      </Box>
      <Box>
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.standardFilled}
          size={SIZES.medium}
        />
      </Box>
      <Box>
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.standardFilled}
          size={SIZES.medium}
        />
      </Box>
      <Box backgroundColor="BLACK" width={'25px'} margin="3px 0" padding="3px">
        <CloseButton {...defaultProps} skin={SKINS.light} size={SIZES.medium} />
      </Box>
      <Box backgroundColor="BLACK" width={'25px'} margin="3px 0" padding="3px">
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.light}
          size={SIZES.medium}
        />
      </Box>
      <Box backgroundColor="BLACK" width={'25px'} margin="3px 0" padding="3px">
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.light}
          size={SIZES.medium}
        />
      </Box>
      <Box padding="3px">
        <CloseButton
          {...defaultProps}
          skin={SKINS.lightFilled}
          size={SIZES.medium}
        />
      </Box>
      <Box padding="3px">
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.lightFilled}
          size={SIZES.medium}
        />
      </Box>
      <Box padding="3px">
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.lightFilled}
          size={SIZES.medium}
        />
      </Box>
      <Box padding="3px">
        <CloseButton {...defaultProps} skin={SKINS.dark} size={SIZES.medium} />
      </Box>
      <Box padding="3px">
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.dark}
          size={SIZES.medium}
        />
      </Box>
      <Box padding="3px">
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.dark}
          size={SIZES.medium}
        />
      </Box>
      <Box padding="3px">
        <CloseButton
          {...defaultProps}
          skin={SKINS.transparent}
          size={SIZES.medium}
        />
      </Box>
      <Box padding="3px">
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.transparent}
          size={SIZES.medium}
        />
      </Box>
      <Box padding="3px">
        <CloseButton
          {...customIconDefaultProps}
          skin={SKINS.transparent}
          size={SIZES.medium}
        />
      </Box>
    </Cell>
  </Layout>
));

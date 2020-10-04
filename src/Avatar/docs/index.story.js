import React from 'react';
import * as icons from 'wix-ui-icons-common';

import Avatar from '..';
import { storySettings } from './storySettings';

import LiveCodeExample from '../../../stories/utils/LiveCodeExample';
import { Layout, Cell } from '../../Layout';

const IMG_REAL_URL = 'https://randomuser.me/api/portraits/women/39.jpg';
const IMG_INVALID_URL = 'https://1234.me/4321.jpg';

const PhotoCamera = icons.PhotoCamera;

const indicationExamples = [
  {
    label: 'Icon',
    value: <PhotoCamera size="24" />,
  },
  {
    label: 'SVG',
    value: (
      <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18">
        <path
          id="addsmall-a"
          d="M10 9L10 5 9 5 9 9 5 9 5 10 9 10 9 14 10 14 10 10 14 10 14 9z"
        ></path>
      </svg>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Avatar,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    name: 'John Doe',
    placeholder: undefined,
    imgProps: undefined,
    size: undefined,
    color: undefined,
    shape: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
    ariaLabel: 'Avatar for John Doe',
    indication: indicationExamples[0].value,
    presence: undefined,
  },
  exampleProps: {
    onIndicationClick: () => 'Clicked!',
    indication: indicationExamples,
    size: [
      'size90',
      'size72',
      'size60',
      'size48',
      'size36',
      'size30',
      'size24',
      'size18',
    ],
    color: ['blue', 'green', 'grey', 'red', 'orange'],
    shape: [
      { label: 'circle (default)', value: 'circle' },
      { label: 'square', value: 'square' },
    ],
    imgProps: [
      { label: 'With Image', value: { src: IMG_REAL_URL } },
      { label: 'With Invalid Image URL', value: { src: IMG_INVALID_URL } },
    ],
    placeholder: Object.entries(icons).map(([name, icon]) => ({
      label: name,
      value: React.createElement(icon),
    })),
  },
  examples: (
    <Layout>
      <Cell span={6}>
        <LiveCodeExample
          compact
          title="Image"
          initialCode={`
<Avatar 
  imgProps={{src: 'https://randomuser.me/api/portraits/women/39.jpg'}}
/>`}
        />
      </Cell>
      <Cell span={6}>
        <LiveCodeExample
          compact
          title="Image Error (Icon Placeholder)"
          initialCode={`
<Avatar 
  imgProps={{src: 'https://1234.me/4321.jpg'}}
/>`}
        />
      </Cell>
      <Cell span={6}>
        <LiveCodeExample
          compact
          title="Image Error (Initials Placeholder)"
          initialCode={`
<Avatar 
  name="John Doe"
  imgProps={{src: 'https://1234.me/4321.jpg'}}
/>`}
        />
      </Cell>
      <Cell>
        <LiveCodeExample
          compact
          title="Sizes"
          initialCode={`
<Box align="space-between" width="500">
  <Avatar size="size90" name={'John Doe'} />
  <Avatar size="size72" name={'John Doe'} />
  <Avatar size="size60" name={'John Doe'} />
  <Avatar size="size48" name={'John Doe'} />
  <Avatar size="size36" name={'John Doe'} />
  <Avatar size="size30" name={'John Doe'} />
  <Avatar size="size24" name={'John Doe'} />
  <Avatar size="size18" name={'John Doe'} />
</Box>  
  `}
        />
      </Cell>
      <Cell>
        <LiveCodeExample
          compact
          title="Square Shape"
          initialCode={`
<Box align="space-between" width="500">
  <Avatar shape="square" presence={'online'} size="size90" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size72" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size60" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size48" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size36" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size30" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size24" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
  <Avatar shape="square" presence={'online'} size="size18" indication={<Icons.PhotoCamera size="24" />} name={'John Doe'} />
</Box>
  `}
        />
      </Cell>
      <Cell>
        <LiveCodeExample
          compact
          title="Colors"
          initialCode={`
<Box align="space-between" width="300">
  <Avatar color="blue"   name={'John Doe'} />
  <Avatar color="green"  name={'John Doe'} />
  <Avatar color="grey"   name={'John Doe'} />
  <Avatar color="red"    name={'John Doe'} />
  <Avatar color="orange" name={'John Doe'} />  
</Box>  
  `}
        />
      </Cell>
      <Cell span={6}>
        <LiveCodeExample
          compact
          title="Placeholder (No name)"
          initialCode={`<Avatar />`}
        />
      </Cell>

      <Cell>
        <LiveCodeExample
          compact
          title="Custom text"
          initialCode={`<Avatar name="John H. Doe" text="JhD"/>`}
        />
      </Cell>

      <Cell>
        <LiveCodeExample
          compact
          title="Presence"
          initialCode={`
          <Box align="space-between" width="180">
            <Avatar presence={'online'} name={'John Doe'} />
            <Avatar presence={'offline'} name={'John Doe'} />
            <Avatar presence={'busy'} name={'John Doe'} />
          </Box> `}
        />
      </Cell>

      <Cell>
        <LiveCodeExample
          compact
          title="Indication"
          initialCode={`
          <Box align="space-between" width="350">
            <Avatar indication={<Icons.PhotoCamera size="24"/>}
             name={'John Doe'} size="size90" /> 
            <Avatar indication={<Icons.PhotoCamera size="24"/>}
             name={'John Doe'} size="size72" />
            <Avatar indication={<Icons.PhotoCamera size="24"/>}
               name={'John Doe'} size="size60" />
            <Avatar indication={<Icons.PhotoCamera size="24"/>}
             name={'John Doe'} />
        </Box>  `}
        />
      </Cell>
    </Layout>
  ),
};

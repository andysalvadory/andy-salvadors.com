import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../Text';
import { SIZES, SKINS, WEIGHTS } from '../constants';
import Box from 'wix-style-react/Box';
import { Layout, Cell } from 'wix-style-react/Layout';

const defaultProps = {
  light: false,
  secondary: false,
  size: 'medium',
  skin: 'standard',
  tagName: 'span',
  weight: 'thin',
};

const sizes = Object.keys(SIZES);

const skins = Object.keys(SKINS);

const weight = Object.keys(WEIGHTS);

//TODO: consider to align to the visual tests convention
const tests = [
  {
    describe: 'Sizes',
    propName: 'size',
    propValues: sizes,
  },
  {
    describe: 'Skins',
    propName: 'skin',
    propValues: skins,
  },
  {
    describe: 'Weight',
    propName: 'weight',
    propValues: weight,
  },
];

tests.forEach(({ describe, propName, propValues }) => {
  storiesOf(`Text/${describe}`, module).add(describe, () => (
    <Layout>
      {propValues.map(propValue => {
        const props = { [propName]: propValue };

        return (
          <Cell span={2}>
            <Text {...defaultProps} {...props}>
              Text Component
            </Text>
          </Cell>
        );
      })}
    </Layout>
  ));
});

storiesOf(`Text/Light prop`, module).add('light prop', () => (
  <Box backgroundColor="B20">
    <Text {...defaultProps} light>
      Text Component
    </Text>
  </Box>
));

storiesOf('Text/Styles', module).add('styles variations', () => (
  <div style={{ backgroundColor: '#f0f4f7' }}>
    {Object.keys(WEIGHTS).map(weight => (
      <p>
        {Object.keys(SIZES).map(size => (
          <p>
            {Object.keys(SKINS).map(skin =>
              [false, true].map(light =>
                [false, true].map(secondary => (
                  <span
                    style={{
                      margin: '12px',
                      backgroundColor:
                        light && skin === 'disabled' ? 'black' : 'transparent',
                    }}
                  >
                    <Text
                      key={`${weight} ${size} ${skin} ${light} ${secondary}`}
                      size={size}
                      weight={weight}
                      skin={skin}
                      light={light}
                      secondary={secondary}
                    >
                      Some Text
                    </Text>
                  </span>
                )),
              ),
            )}
          </p>
        ))}
      </p>
    ))}
  </div>
));

storiesOf('Text/Link', module).add('href', () => (
  <Text>
    <a href="/">Some Text</a>
  </Text>
));

//TODO - ellipsis test is correct but the tooltip does not display on initial load, looks like a bug in the HOC
// import ReactTestUtils from 'react-dom/test-utils';
//   .add('ellipsis', () => <TextEllipsis />);

// class TextEllipsis extends React.Component {
//   componentDidMount() {
//     setTimeout(() => {
//       ReactTestUtils.Simulate.mouseEnter(
//         document.querySelector('[data-hook="text-with-ellipsis"]'),
//       );
//     });
//   }
//   render() {
//     return (
//       <div style={{ width: '120px' }}>
//         <Text ellipsis dataHook="text-with-ellipsis">
//           very very long text
//         </Text>
//       </div>
//     );
//   }
// }

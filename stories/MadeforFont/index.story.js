import React from 'react';
import { Category } from '../storiesHierarchy';
import { header, description } from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import { Text } from '../../src';

export default {
  category: Category.GETTINGSTARTED,
  storyName: 'Madefor Font',

  sections: [
    header(),

    description({
      title: 'Usage guide',
      text: (
        <Text>
          wix-style-react library is ready for Madefor!
          <br />
          For a nice preview, press the Madefor button at the top of each
          storybook page. (Including this one!)
        </Text>
      ),
    }),

    description({
      text: [
        <Text tagName="p">
          In order to use it in your code you need to follow these steps:
        </Text>,

        <ul>
          <li>
            <Text>
              Import font definitions, visit{' '}
              <a
                href="https://wix-fonts.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                wix-fonts
              </a>{' '}
              for more information.
            </Text>
          </li>
          <li>
            <Text tagName="div">
              Use our
              <LinkTo
                kind={Category.COMPONENTS}
                story="FontUpgrade"
              >{` <FontUpgrade/> `}</LinkTo>
              wrapper component to define the affected scope.
            </Text>
          </li>
        </ul>,
      ],
    }),
  ],
};

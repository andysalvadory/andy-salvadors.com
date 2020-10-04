/* eslint-disable no-console */
import React from 'react';
import { SingleComponentStacked, Preview } from '../../../sharedComponents';
import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../../../sharedComponents/utils';

import { layoutSymbolsToComponents } from '../../../../../symbolsComponentsMapping/families/layoutFamily';
import {
  layoutSymbols,
  symbolsGroup,
} from '../../../../../symbolsComponentsMapping/symbols';

import Card from 'wix-style-react/Card';

import Box from 'wix-style-react/Box';
import { Row, Col, Container } from 'wix-style-react/Grid';
import TextButton from 'wix-style-react/TextButton';
import Add from 'wix-style-react/new-icons/Add';

const groupSymbol = symbolsGroup.layout;

const CardExamples = () => {
  const symbol = layoutSymbols.cardLayout;
  const components = layoutSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Card>
          <Card.Header
            title="Card title"
            subtitle="This is how a subtitle looks like"
            suffix={
              <TextButton
                onClick={() => console.log('TextButton clicked!')}
                size="medium"
                prefixIcon={<Add />}
                children="Text Button"
              />
            }
          />
          <Card.Content>
            <Box minHeight="200px" />
          </Card.Content>
        </Card>
      </Preview>
    </SingleComponentStacked>
  );
};

export default CardExamples;

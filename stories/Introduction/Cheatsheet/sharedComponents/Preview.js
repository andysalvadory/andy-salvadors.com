import React from 'react';

import Card from 'wix-style-react/Card';
import Box from 'wix-style-react/Box';

const Preview = props => {
  const { children, wrapWithCard, stretch } = props;

  return (
    <Box
      inline={!stretch}
      direction="vertical"
      padding="30px"
      backgroundColor="D70"
    >
      {wrapWithCard ? (
        <Card>
          <Card.Content>{children}</Card.Content>
        </Card>
      ) : (
        children
      )}
    </Box>
  );
};

export default Preview;

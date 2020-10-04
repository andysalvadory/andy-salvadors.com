import * as React from 'react';

interface IllustrationProps {
  illustration?: string | React.ReactNode;
  illustrationSize?: 'small' | 'large';
}

export const Illustration: React.FunctionComponent<IllustrationProps>;

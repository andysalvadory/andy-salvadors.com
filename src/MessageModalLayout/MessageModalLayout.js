import React, { useState, useCallback } from 'react';
import styles from './MessageModalLayout.st.css';
import BaseModalLayout, {
  Header,
  Content,
  Footer,
  Footnote,
  Illustration,
} from '../BaseModalLayout';
import Box from '../Box';

/** MessageModalLayout */
const MessageModalLayout = ({ children, ...restProps }) => {
  const { illustration } = restProps;
  const [showFooterDivider, setShowFooterDivider] = useState(false);

  const onContentScrollPositionChanged = useCallback(({ position }) => {
    const { y: scrollPosition } = position;
    const newShowDivider =
      scrollPosition === 'top' || scrollPosition === 'middle';
    setShowFooterDivider(newShowDivider);
  }, []);

  const getScrollPositionChangedHandler = useCallback(
    () => ({
      ...(!!illustration ? { onContentScrollPositionChanged } : {}),
    }),
    [illustration, onContentScrollPositionChanged],
  );

  const getShowDividerState = useCallback(
    () => ({
      ...(!!illustration ? { showFooterDivider } : {}),
    }),
    [illustration, showFooterDivider],
  );

  const hasIllustration = !!illustration;

  return (
    <BaseModalLayout
      {...styles('root', { hasIllustration }, restProps)}
      {...restProps}
      contentHideDividers={hasIllustration}
    >
      <Box>
        <Illustration />
        <div className={styles.mainContainer}>
          <Header />
          <Content {...getScrollPositionChangedHandler()}>{children}</Content>
        </div>
      </Box>
      <Footer {...getShowDividerState()} />
      <Footnote />
    </BaseModalLayout>
  );
};

MessageModalLayout.displayName = 'MessageModalLayout';

MessageModalLayout.propTypes = {
  ...BaseModalLayout.propTypes,
  ...Header.propTypes,
  ...Content.propTypes,
  ...Footer.propTypes,
  ...Footnote.propTypes,
  ...Illustration.propTypes,
};

MessageModalLayout.defaultProps = {
  ...BaseModalLayout.defaultProps,
  contentMaxHeight: 300,
};

export default MessageModalLayout;

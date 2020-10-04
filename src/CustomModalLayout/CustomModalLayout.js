import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomModalLayout.st.css';
import BaseModalLayout, {
  Header,
  Content,
  Footer,
  Footnote,
} from '../BaseModalLayout';

/** CustomModalLayout */
const CustomModalLayout = ({
  children,
  removeContentPadding,
  width,
  ...restProps
}) => {
  const style = width ? { width } : {};
  return (
    <BaseModalLayout
      style={style}
      data-contentpadding={!removeContentPadding}
      {...styles('root', { removeContentPadding }, restProps)}
      {...restProps}
    >
      <Header />
      <Content>{children}</Content>
      <Footer />
      <Footnote />
    </BaseModalLayout>
  );
};

CustomModalLayout.displayName = 'CustomModalLayout';

CustomModalLayout.propTypes = {
  ...BaseModalLayout.propTypes,
  ...Header.propTypes,
  ...Content.propTypes,
  ...Footer.propTypes,
  ...Footnote.propTypes,
  /** When set to true, there will be no content padding */
  removeContentPadding: PropTypes.bool,
  /** The modal desired width */
  width: PropTypes.string,
};

CustomModalLayout.defaultProps = {
  ...BaseModalLayout.defaultProps,
  removeContentPadding: false,
};

export default CustomModalLayout;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './AnnouncementModalLayout.st.css';
import TextButton from '../TextButton';
import { dataHooks } from './constants';

import BaseModalLayout, {
  Header,
  Content,
  Footer,
  Footnote,
  Illustration,
} from '../BaseModalLayout';

/** A layout for announcement modals, to be used inside a &lt;Modal /&gt; */
const AnnouncementModalLayout = ({ children, ...restProps }) => (
  <BaseModalLayout className={styles.announcementModalLayout} {...restProps}>
    <Illustration />
    <Header />
    <Content>{children}</Content>
    <Footer />
    <Link {...restProps} />
    <div className={styles.bottomSpacing} />
    <Footnote />
  </BaseModalLayout>
);

const Link = ({ linkText, linkOnClick, theme }) =>
  ((linkText || linkOnClick) && (
    <div className={styles.link}>
      <TextButton
        size="small"
        weight="normal"
        dataHook={dataHooks.link}
        onClick={linkOnClick}
        skin={theme}
      >
        {linkText}
      </TextButton>
    </div>
  )) ||
  null;

AnnouncementModalLayout.displayName = 'AnnouncementModalLayout';

AnnouncementModalLayout.propTypes = {
  ...BaseModalLayout.propTypes,
  ...Header.propTypes,
  ...Content.propTypes,
  ...Footer.propTypes,
  ...Footnote.propTypes,
  ...Illustration.propTypes,
  /** When not provided, the primary link will not be rendered */
  linkText: PropTypes.string,
  /** callback for when the link is clicked */
  linkOnClick: PropTypes.func,
};

AnnouncementModalLayout.defaultProps = {
  ...BaseModalLayout.defaultProps,
  titleAppearance: 'H2',
  actionsSize: 'medium',
};

export default AnnouncementModalLayout;

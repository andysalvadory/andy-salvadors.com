import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import styles from './SidebarDivider.st.css';

export const SidebarDividerDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    isFullWidth: () => base.hasClass(`${styles.fullWidth}`),
  };
};

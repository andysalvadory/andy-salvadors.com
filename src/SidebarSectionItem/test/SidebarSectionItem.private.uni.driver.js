import publicDriverFactory, {
  getPrefix,
  getSuffix,
} from '../SidebarSectionItem.uni.driver';

import styles from '../SidebarSectionItem.st.css';

export default base => {
  return {
    ...publicDriverFactory(base),

    hasChevron: () => base.$(`.${styles.chevron}`).exists(),
    hasPrefix: () => getPrefix(base).exists(),
    hasSuffix: () => getSuffix(base).exists(),
  };
};

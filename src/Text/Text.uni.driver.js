import {
  baseUniDriverFactory,
  StylableUnidriverUtil,
} from '../../test/utils/unidriver';

import style from './Text.st.css';

export const textUniDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    /**
     * Get the root element's tagName
     * @ReactDOMOnly
     * @returns {string} html tagName
     */
    getTagName: async () => (await base._prop('tagName')).toLowerCase(),
    /**
     * Get text content (innerHTML)
     * @ReactDOMOnly
     * @returns {string} innerHTML content
     */
    getText: () => base._prop('innerHTML'),
    /**
     * Get size
     * @returns { 'tiny' | 'small' | 'medium' }
     */
    getSize: () => stylableUtil.getStyleState(base, 'size'),
    /**
     * Get skin
     * @returns { 'standard'| 'error'| 'success'| 'premium'| 'disabled' }
     */
    getSkin: () => stylableUtil.getStyleState(base, 'skin'),
    /**
     * Get weight
     * @returns { 'thin' | 'normal' | 'bold' }
     */
    getWeight: () => stylableUtil.getStyleState(base, 'weight'),
    /**
     * Is light
     * @returns { boolean }
     */
    isLight: () => stylableUtil.hasStyleState(base, 'light'),
    /**
     * Is secondary
     * @returns { boolean }
     */
    isSecondary: () => stylableUtil.hasStyleState(base, 'secondary'),
  };
};

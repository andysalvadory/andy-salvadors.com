import { StylableUnidriverUtil } from '../../test/utils/unidriver';
import style from './Swatches.st.css';

export const swatchesDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(style);
  const getSwatch = async index =>
    base.$$('[data-hook="color-swatches-swatch"]').get(index);

  return {
    exists: async () => base.exists(),

    /** Get swatch count */
    getSwatchCount: async () =>
      base.$$('[data-hook="color-swatches-swatch"]').count(),

    /** Get swatch at given index */
    getSwatch,

    /** Test if swatch is selected at given index */
    isSwatchSelectedAt: async index => {
      const swatch = await getSwatch(index);
      return (await stylableUtil.getStyleState(swatch, 'selected')) === 'true';
    },
  };
};

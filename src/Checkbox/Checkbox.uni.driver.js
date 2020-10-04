import { Simulate } from 'react-dom/test-utils';
import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { labelUniDriverFactory } from 'wix-ui-backoffice/dist/src/components/Label/Label.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

import * as DATA_ATTR from './DataAttr';

const getDataCheckType = base => base.attr(DATA_ATTR.DATA_CHECK_TYPE);

export const checkboxUniDriverFactory = (base, body) => {
  const reactBase = ReactBase(base);
  const input = () => base.$('input');
  const isChecked = async () =>
    (await getDataCheckType(base)) === DATA_ATTR.CHECK_TYPES.CHECKED;
  const labelDriver = async () =>
    labelUniDriverFactory(base.$('[data-hook="checkbox-label"]'));
  const tooltipDriver = async () =>
    tooltipDriverFactory(base.$('[data-hook="checkbox-box"]'), body);

  return {
    ...baseUniDriverFactory(base),
    click: async () => {
      if (base.type === 'react') {
        // eslint-disable-next-line no-restricted-properties
        Simulate.change(await input().getNative(), {
          target: { checked: !(await isChecked()) },
        });
      } else {
        return base.click();
      }
    },
    /** trigger focus on the element */
    focus: reactBase.focus,
    /** trigger blur on the element */
    blur: reactBase.blur,
    /**
     * Focus related testing is done in e2e tests only.
     * @deprecated
     */
    hasFocusState: () => base.attr('data-focus'),
    isChecked,
    isDisabled: async () =>
      (await base.attr(DATA_ATTR.DATA_DISABLED)) === 'true',
    isIndeterminate: async () =>
      (await getDataCheckType(base)) === DATA_ATTR.CHECK_TYPES.INDETERMINATE,
    hasError: async () =>
      (await base.attr(DATA_ATTR.DATA_HAS_ERROR)) === 'true',
    getLabel: async () => (await labelDriver()).getLabelText(),
    getLabelDriver: () => labelDriver(),
    getErrorMessage: async () => {
      try {
        const newVar = await tooltipDriver();
        return newVar.getTooltipText();
      } catch (e) {
        throw new Error('Failed getting checkbox error message');
      }
    },
  };
};

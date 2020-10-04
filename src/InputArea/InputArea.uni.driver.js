import styles from './InputArea.scss';
import { tooltipDataHook } from '../ErrorIndicator/ErrorIndicator';
import { errorIndicatorDriverFactory } from '../ErrorIndicator/ErrorIndicator.uni.driver';

import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const inputAreaUniDriverFactory = (base, body) => {
  const textAreaElement = base.$(`.${styles.root}`);
  const textArea = base.$('textarea');
  const counterSelector = '[data-hook="counter"]';
  const errorIndicatorSelector = '[data-hook="inputArea-tooltip"]';
  const errorIndicatorTestkit = () =>
    errorIndicatorDriverFactory(base.$(errorIndicatorSelector), body);

  const textAreaBase = ReactBase(textArea);

  return {
    ...baseUniDriverFactory(base),

    trigger: (trigger, event) => textAreaBase[trigger](event),
    focus: () => textAreaBase.focus(),
    enterText: text => textArea.enterValue(text),
    getValue: () => textArea.value(),
    getName: () => textArea.attr('name'),
    getPlaceholder: () => textArea._prop('placeholder'),
    getDefaultValue: () => textArea._prop('defaultValue'),
    getRowsCount: () => textArea._prop('rows'),
    getMaxLength: () => textArea._prop('maxLength'),
    getTabIndex: () => textArea._prop('tabIndex'),
    getReadOnly: () => textArea._prop('readOnly'),
    getResizable: () => textAreaElement.hasClass(styles.resizable),
    getDisabled: () =>
      textAreaElement.hasClass(styles.disabled) && textArea._prop('disabled'),
    getHasCounter: () => !!base.$$(counterSelector).length,
    getCounterValue: () => base.$(counterSelector).text(),
    hasExclamation: () => base.$$(`.${styles.exclamation}`).length === 1,
    hasError: () => textAreaElement.hasClass(styles.hasError),
    isFocusedStyle: () => textAreaElement.hasClass(styles.hasFocus),
    isHoveredStyle: () => textAreaElement.hasClass(styles.hasHover),
    isOfStyle: style => textAreaElement.hasClass(styles[`theme-${style}`]),
    isFocus: () => textAreaBase.isFocus(),
    exists: () => textArea.exists(),
    getStyle: () => textArea._prop('style'),
    getAriaLabel: () => textArea.attr('aria-label'),
    getAriaControls: () => textArea.attr('aria-controls'),
    getAriaDescribedby: () => textArea.attr('aria-describedby'),
    // TODO: get the dataHook using the <ErrorIndicator/> driver
    getTooltipDataHook: () => tooltipDataHook,
    getTooltipElement: () => base,
    isErrorMessageShown: () => errorIndicatorTestkit().isShown(),
    mouseEnterErrorIndicator: () => errorIndicatorTestkit().mouseEnter(),
    getErrorMessage: () => errorIndicatorTestkit().getErrorMessage(),
  };
};

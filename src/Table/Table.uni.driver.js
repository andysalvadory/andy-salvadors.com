import { baseUniDriverFactory, getElement } from '../../test/utils/unidriver';
import { dataTablePrivateUniDriverFactory } from '../DataTable/DataTable.private.uni.driver';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';
import deprecationLog from '../utils/deprecationLog';

export const tableUniDriverFactory = base => {
  const dataTableDriver = dataTablePrivateUniDriverFactory(base);
  const getRowCheckboxDriver = async index => {
    const cell = await dataTableDriver.getCell(index, 0);
    return checkboxUniDriverFactory(await cell.$('[data-hook="row-select"]'));
  };
  const getBulkSelectionCheckboxDriver = async () => {
    const cell = await dataTableDriver.getHeaderCell(0);
    return checkboxUniDriverFactory(await cell.$('[data-hook="table-select"]'));
  };
  const isBulkSelectionChecked = async () => {
    const checkboxDriver = await getBulkSelectionCheckboxDriver();
    return (
      (await checkboxDriver.isChecked()) &&
      !(await checkboxDriver.isIndeterminate())
    );
  };
  const isBulkSelectionIndeterminate = async () => {
    const checkboxDriver = await getBulkSelectionCheckboxDriver();
    return (
      !(await checkboxDriver.isChecked()) &&
      (await checkboxDriver.isIndeterminate())
    );
  };
  const isBulkSelectionUnchecked = async () => {
    const checkboxDriver = await getBulkSelectionCheckboxDriver();
    return (
      !(await checkboxDriver.isChecked()) &&
      !(await checkboxDriver.isIndeterminate())
    );
  };

  return {
    ...baseUniDriverFactory(base),
    ...dataTableDriver,
    /** Get driver of row selection checkbox by row index */
    getRowCheckboxDriver,
    /** Get driver of row bulk-selection checkbox */
    getBulkSelectionCheckboxDriver,
    /** Whether bulk selection checkbox is disabled */
    isBulkSelectionDisabled: async () =>
      (await getBulkSelectionCheckboxDriver()).isDisabled(),
    /** Whether specific row selection checkbox is disabled */
    isRowSelectionDisabled: async index =>
      (await getRowCheckboxDriver(index)).isDisabled(),
    /** Click the row selection checkbox */
    clickRowChecbox: async index => {
      deprecationLog(
        '"clickRowChecbox" method is deprecated (because of typo) and will be removed in next major release, please use "clickRowCheckbox" driver method',
      );
      return (await getRowCheckboxDriver(index)).click();
    },
    clickRowCheckbox: async index =>
      (await getRowCheckboxDriver(index)).click(),
    /** Click the bulk-selection checkbox */
    clickBulkSelectionCheckbox: async () =>
      (await getBulkSelectionCheckboxDriver()).click(),
    /** Is row selected by index */
    isRowSelected: async index =>
      (await getRowCheckboxDriver(index)).isChecked(),
    getBulkSelectionState: async () => {
      if (await isBulkSelectionChecked()) {
        return 'ALL';
      }
      if (await isBulkSelectionIndeterminate()) {
        return 'SOME';
      }
      if (await isBulkSelectionUnchecked()) {
        return 'NONE';
      }
    },
    /** Get title-bar (column titles) */
    getTitlebar: () => getElement(base.$('[data-hook="table-title-bar"]')),
  };
};

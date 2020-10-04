import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { SyntheticEventData } from 'react-dom/test-utils';

export interface DataTableUniDriver extends BaseUniDriver {
  getRow: (rowIndex: number) => UniDriver;
  getRowsCount: () => Promise<number>;
  /** @deprecated Should be private */
  getRowsWithClassCount: (className: string) => Promise<number>;
  /** @deprecated Should be private */
  getRowsWithDataHook: (dataHookName: string) => Promise<any[]>;
  /** @deprecated Should be private */
  getRowWithDataHook: (dataHookName: string) => Promise<any>;
  getRowText: (index: number) => Promise<string>;
  /** @deprecated Should be private */
  getRowClasses: (index: number) => Promise<string[]>;
  /** @deprecated Should be private */
  getHeaderCell: (index: number) => Promise<any>;
  getHeaderCellStyle: (index: number) => Promise<any>;
  getHeaderCellWidth: (index: number) => Promise<any>;
  /**
   * @deprecated Should be private
   */
  getCell: (rowIndex: number, cellIndex: number) => Promise<any>;
  getCellStyle: (rowIndex: number, colIndex: number) => Promise<any>;
  getCellWidth: (rowIndex: number, colIndex: number) => Promise<any>;
  isRowClickable: (index: number) => Promise<boolean>;
  isRowAnimated: (index: number) => Promise<boolean>;
  getTitles: () => Promise<string[]>;
  isDisplayingNothing: () => Promise<boolean>;
  isDisplayingHeaderOnly: () => Promise<boolean>;
  isDisplayingHeader: () => Promise<boolean>;
  hasChildWithId: (id: string) => Promise<boolean>;
  clickRow: (index: number) => Promise<void>;
  mouseEnterRow: (
    index: number,
    eventData?: SyntheticEventData,
  ) => Promise<void>;
  mouseLeaveRow: (
    index: number,
    eventData?: SyntheticEventData,
  ) => Promise<void>;
  hasRowDetails: (index: number) => Promise<boolean>;
  getRowDetailsText: (index: number) => Promise<string>;
  hasSortableTitle: (index: number) => Promise<boolean>;
  hasInfoIcon: (index: number) => Promise<boolean>;
  hasSortDescending: (index: number) => Promise<boolean>;
  clickSort: (index: number) => Promise<void>;
  /** @deprecated Should be private */
  getRowDetails: (index: number) => Promise<any>;
}

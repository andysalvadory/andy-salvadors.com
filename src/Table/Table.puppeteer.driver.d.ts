import { ElementHandle } from 'puppeteer';

export interface TablePuppeteerDriver {
  element: () => ElementHandle;
  exists: () => Promise<boolean>;
  getCellTextValue: (row?: number, column?: number) => Promise<string>;
  getRowsCount: () => Promise<number>;
}

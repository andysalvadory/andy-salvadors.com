import { ElementHandle } from 'puppeteer';

export interface FormFieldPuppeteerDriver {
  element: () => ElementHandle;
  getLabelValue: () => Promise<string>;
  getTooltipInfoValue: (delay: number) => Promise<string>;
  isRequired: () => Promise<boolean>;
}

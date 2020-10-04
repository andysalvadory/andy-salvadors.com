import { ElementHandle } from 'puppeteer';

export interface NoBorderInputPuppeteerDriver {
  element: () => ElementHandle;
  enterText: (text: string) => Promise<void>;
  getText: () => Promise<string>;
}

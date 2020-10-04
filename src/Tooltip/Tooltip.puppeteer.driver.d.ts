import { ElementHandle } from 'puppeteer';

export interface TooltipPuppeteerDriver {
  element: () => ElementHandle;
  getTooltipTextContent: (delay?: number) => Promise<string>
}
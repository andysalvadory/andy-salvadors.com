import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';
import { headingUniDriverFactory } from '../Heading/Heading.uni.driver';

/**
 * Note: Testing AudioPlayer is not possible in JSdom due to the web audio API.
 */
export const audioPlayerDriverFactory = (base, body) => {
  const timeIndicator = base.$(`[data-hook=${dataHooks.audioTimeIndicator}]`);
  const playPauseButton = base.$(
    `[data-hook=${dataHooks.audioPlayerPlayPause}]`,
  );
  const playPauseButtonDriver = iconButtonDriverFactory(playPauseButton);
  const timeIndicatorDriver = headingUniDriverFactory(timeIndicator);

  return {
    ...baseUniDriverFactory(base, body),
    clickOnPlayPauseButton: () => playPauseButtonDriver.click(),
    timeIndicatorText: () => timeIndicatorDriver.getText(),
  };
};

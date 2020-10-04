import { positionY } from './constants';

export const getScrollPositionY = ({
  scrollHeight,
  clientHeight,
  scrollTop,
}) => {
  if (scrollHeight <= clientHeight) {
    return positionY.NONE;
  } else if (scrollTop === 0) {
    return positionY.TOP;
  } else if (scrollHeight - scrollTop === clientHeight) {
    return positionY.BOTTOM;
  } else {
    return positionY.MIDDLE;
  }
};

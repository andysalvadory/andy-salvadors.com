export const getScrollPositionY = ({
  scrollHeight,
  clientHeight,
  scrollTop,
}) => {
  let newScrollPositionY = 'middle';
  if (scrollHeight <= clientHeight) {
    newScrollPositionY = 'none';
  } else if (scrollTop === 0) {
    newScrollPositionY = 'top';
  } else if (scrollHeight - scrollTop === clientHeight) {
    newScrollPositionY = 'bottom';
  }
  return newScrollPositionY;
};

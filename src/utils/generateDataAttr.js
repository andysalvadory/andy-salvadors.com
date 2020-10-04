export const generateDataAttr = (props, filter) =>
  Object.entries(props)
    .filter(([key]) => filter && filter.includes(key))
    .reduce(
      (output, [key, value]) => ({ ...output, [`data-${key}`]: value }),
      {},
    );

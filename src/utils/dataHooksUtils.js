export const getFormattedHooks = dataHooks => {
  const formattedDataHooks = {};
  Object.entries(dataHooks).map(
    ([entry, value]) => (formattedDataHooks[entry] = `[data-hook="${value}"]`),
  );
  return formattedDataHooks;
};

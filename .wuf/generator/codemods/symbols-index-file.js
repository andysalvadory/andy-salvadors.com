module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const { componentName, ComponentName } = options;

  const exports = root.find(j.ExportNamedDeclaration).paths();

  j(exports[exports.length - 1]).insertAfter(
    `
/**
 * Unclassified UX symbol.
 * TODO: move to the relevant family
 */
export const unclassifiedSymbols = {
  ${componentName}: '13.1 ${ComponentName}',
};
    `,
  );

  return root.toSource();
};

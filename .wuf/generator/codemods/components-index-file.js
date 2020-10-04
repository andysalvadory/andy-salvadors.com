module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const { ComponentName } = options;

  const exports = root.find(j.ExportNamedDeclaration).paths();

  j(exports[exports.length - 1]).insertAfter(
    `
/**
 * Unclassified Components.
 * TODO: move to the relevant family
 */
export const unclassifiedComponentsNames = {
   ${ComponentName}: ' ${ComponentName}',
};
    `,
  );

  return root.toSource();
};

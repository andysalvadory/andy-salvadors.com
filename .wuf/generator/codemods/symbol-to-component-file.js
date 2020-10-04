module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { componentName, ComponentName } = options;

  root.get().node.program.body.push(
    `
/* Placeholder file when generating a new component */

/**
 * TODO: move to the relevant family file
 */
 import { unclassifiedSymbols } from '../symbols';
 import {
  unclassifiedComponentsNames as componentsNames,
  sharedComponentsNames,
 } from '../components';

 export const unclassifiedSymbolsToComponents = {
    [unclassifiedSymbols.${componentName}]: [
        componentsNames.${ComponentName} ,
        sharedComponentsNames.FormField
    ]
 };
    `
  );

  return root.toSource();
};

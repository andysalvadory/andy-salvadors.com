const execa = require('execa');

module.exports = function() {
  const patchCJS = execa.command(
    `stc --srcDir=./src --stcss=true --js=false --outDir=./dist/src --useNamespaceReference`,
  );

  const patchES = execa.command(
    `stc --srcDir=./src --stcss=true --js=false --outDir=./dist/es/src --useNamespaceReference`,
  );

  return Promise.all([patchCJS, patchES]);
};

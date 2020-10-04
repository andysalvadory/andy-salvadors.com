const fs = require('fs');
const glob = require('glob');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'dist/es/src');

const STYLABLE_PATTERN = '/**/*.st.css';
const STYLABLE_ES_PATTERN = '/**/*.es.st.css';

module.exports = () => {
  const stylableFiles = glob.sync(targetDir + STYLABLE_PATTERN, {
    ignore: [targetDir + STYLABLE_ES_PATTERN],
  });

  return Promise.all(
    stylableFiles.map(filepath => {
      return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', function(e, content) {
          if (e != null) {
            reject();
            return;
          }
          const codeWithEsImport = content.replace(
            /wix-ui-core\/index\.st\.css/g,
            'wix-ui-core/index.es.st.css',
          );
          fs.writeFile(filepath, codeWithEsImport, function(err) {
            if (err) {
              reject();
              return;
            }
            resolve();
          });
        });
      });
    }),
  );
};

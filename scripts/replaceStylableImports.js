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

          let results = content;

          results = results
            .replace(
              /wix-ui-core\/index\.st\.css/g,
              'wix-ui-core/index.es.st.css',
            )
            .replace(
              /wix-ui-core\/hocs\.st\.css/g,
              'wix-ui-core/hocs.es.st.css',
            );

          const wrongPaths = [
            {
              regexp: /wix-ui-core\/dist\/src\/hocs\/.*\/[A-Za-z]*\.st\.css/,
              correct: 'hocs.st.css',
            },
            {
              regexp: /wix-ui-core\/dist\/src\/components\/.*\/[A-Za-z]*\.st\.css/,
              correct: 'index.st.css',
            },
          ];

          wrongPaths.forEach(({ regexp, correct }) => {
            if (regexp.test(results)) {
              const message = [
                'This stylesheet',
                filepath,
                'includes import path',
                results.match(regexp),
                'which is not compatible with our es-modules infrastructure.',
                'Makes sure to change your wix-ui-core import to this: -st-import:',
                `wix-ui-core/${correct}`,
                'and to named import: -st-named: ComponentName;',
                '',
              ];
              throw new Error(message.join(' '));
            }
          });

          fs.writeFile(filepath, results, function(err) {
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

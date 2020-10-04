module.exports = [
  {
    codemod: 'stories-file.js',
    dist: 'stories/index.js',
    description: 'Add story to the stories file',
  },
  {
    codemod: 'index-file.js',
    dist: 'src/index.js',
    description: 'Add component export to the index.js file',
  },
  {
    codemod: 'index-ts-file.js',
    dist: 'src/index.d.ts',
    description: 'Add component export to the index.d.ts file',
  },
  {
    codemod: 'perfer-config-file.js',
    dist: 'perfer.config.js',
    description: 'Add new threshold for new component',
  },
  {
    codemod: 'components-index-file.js',
    dist: 'stories/symbolsComponentsMapping/components.js',
    description : 'Add component to components mapping file'
  },
  {
    codemod: 'symbols-index-file.js',
    dist: 'stories/symbolsComponentsMapping/symbols.js',
    description: 'Add UX symbol to symbols mapping file'
  },
  {
    codemod: 'symbol-to-component-file.js',
    dist: 'stories/symbolsComponentsMapping/families/unclassifiedFamily.js',
    description: 'Add symbol to component mapping',
  }
];

module.exports = [
  {
    codemod: "stories-file.js",
    dist: "stories/index.js",
    description: "Add story to the stories file"
  },
  {
    codemod: "index-file.js",
    dist: "src/index.js",
    description: "Add component export to the index file"
  },

  {
    codemod: "testkit-definitions.js",
    dist: ".wuf/testkits/definitions.js",
    description: "Update testkit-definitions.js file"
  }
];

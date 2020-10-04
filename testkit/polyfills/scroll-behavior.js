const originalScrollTo = window.scrollTo;

const install = () => {
  // TODO: Apply a polyfill instead of stubbing the function
  window.scrollTo = () => {};
};

const uninstall = () => {
  window.scrollTo = originalScrollTo;
};

export default {
  install,
  uninstall,
};

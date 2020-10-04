/**
 * filterObject is a utility function for excluding desired properties from an object. It works similar to Array.prototype.filter.
 * This function should be used instead of Object.fromEntries(Object.entries(object).filter(...))
 *
 * @param {object} object - original object to be filtered
 * @param {function} filter - function of signature (key, value) => boolean. executed for each property in `object`
 * @return {object}
 */
export const filterObject = (object, filter = () => true) => {
  const output = {};
  for (const key in object) {
    if (object.hasOwnProperty(key) && filter(key, object[key])) {
      output[key] = object[key];
    }
  }
  return output;
};

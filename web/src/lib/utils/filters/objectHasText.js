/**
 * Helper function for taking in a string, object, or array,
 * and recursively checking for if a bit of text is present
 * anywhere inside
 *
 * @param {string|Array|Object} object
 * @param {string} text
 * @returns {boolean}
 */
export default function objectHasText(object, text) {
  if (!object) return false;
  if (typeof object === "string")
    return object.toLowerCase().includes(text.toLowerCase());
  if (Array.isArray(object))
    return object.some((item) => objectHasText(item, text));

  if (typeof object === "object")
    return Object.values(object).some((propVal) =>
      objectHasText(propVal, text)
    );
  return false;
}

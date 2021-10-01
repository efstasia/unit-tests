export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === "";
  } else if (type === "object") {
    if (Array.isArray(stringArrayOrObject) === true) {
      return stringArrayOrObject.length === 0;
    } else {
      return Object.entries(stringArrayOrObject).length === 0;
    }
  }
};

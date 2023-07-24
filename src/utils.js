export function toCamelCase(string) {
  // arrow function uses throwaway variable for the regex match,
  // capture group 0, as per replace() format
  return string.replace(/[-_\s](.)/g, (_, char) => char.toUpperCase());
}

function setAttributes(element, attribtues) {
  Object.keys(attribtues).forEach((key) =>
    element.setAttribute(key, attribtues[key]),
  );
}

export function createCheckbox(variation) {
  const input = document.createElement("input");
  const label = document.createElement("label");
  const div = document.createElement("div");

  // setAttributes(input, {});
}

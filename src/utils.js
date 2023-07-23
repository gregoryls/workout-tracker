export function toCamelCase(string) {
  // arrow function uses throwaway variable for the regex match,
  // capture group 0, as per replace() format
  return string.replace(/[\s](.)/g, (_, char) => char.toUpperCase());
}
export function placeholder() {}

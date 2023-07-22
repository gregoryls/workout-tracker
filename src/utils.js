export default function toCamelCase(string) {
  return string.replace(/[\s](.)/g, (_, char) => char.toUpperCase());
}

export function padArray(input, length, fillWith) {
  return input.concat(Array(length).fill(fillWith)).slice(0, length);
}

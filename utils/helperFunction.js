export function rotate(arr, count) {
  const length = arr.length;
  if (count < 0) {
    count = count + length;
  }
  count = count % length;

  const rotatedArray = [
    ...arr.slice(length - count),
    ...arr.slice(0, length - count),
  ];
  return rotatedArray;
}

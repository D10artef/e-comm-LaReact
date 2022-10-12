function isObject(object) {
  return object != null && typeof object === "object";
}
export function deepEqual(itemOne, itemTwo) {
  const keysOne = Object.keys(itemOne);
  const keysTwo = Object.keys(itemTwo);

  if (keysOne.length !== keysTwo.length) return false;

  for (const key of keysOne) {
      const firstVal = itemOne[key];
      const secondVal = itemTwo[key];

      const areObjects = isObject(firstVal) && isObject(secondVal);
      if (
          (areObjects && !deepEqual(firstVal, secondVal)) ||
          (!areObjects && firstVal !== secondVal)
      ) {
          return false;
      }
  }
  return true;
}


export function compareTable(tabelOne, tableTwo) {
  if (
      tableTwo.length === tabelOne.length &&
      tabelOne.every((value, index) => deepEqual(value, tableTwo[index]))
  )
      return true;
  return false;
}

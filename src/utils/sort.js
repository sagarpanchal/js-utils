export function sort(list = [], desc = false) {
  const returnValue = { less: desc ? 1 : -1, more: desc ? -1 : 1 };
  return list.sort((curr, next) => {
    return curr < next ? returnValue.less : curr > next ? returnValue.more : 0;
  });
}

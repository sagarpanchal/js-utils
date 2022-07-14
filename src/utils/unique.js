export function unique(list = []) {
  return list.reduce((p = [], c) => {
    const indexFound = p.findIndex((item) => item === c);
    if (indexFound === -1) p.push(c);
    return p;
  }, []);
}

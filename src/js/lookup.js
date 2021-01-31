/**
 * const a = {
    b: {
      c: {
        d: 100
      }
    }
  }
  100 = lookup(a, "b.c.d")
 * @param {*} data 
 * @param {*} keyName 
 */
export default function lookup(data, keyName) {
  const arr = keyName.split(".");
  for (const item of arr) {
    data = data[item];
  }
  return data;
}

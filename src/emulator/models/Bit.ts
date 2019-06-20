type Bit = 0 | 1;

export const toBit = (arg: boolean | number | string): Bit => {
  let val;
  if (typeof arg === 'number') {
    val = !!arg;
  }
  if (typeof arg === 'string') {
    let num = parseInt(arg);
    if (isNaN(num)) {
      throw new Error('Not a number');
    }
    val = num;
  }
  return val ? 1 : 0;
};

export default Bit;

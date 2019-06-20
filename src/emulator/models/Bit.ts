type Bit = 0 | 1;

export const toBit = (arg: boolean | number): Bit => {
  const val = typeof arg === 'number' ? !!arg : arg;
  return val ? 1 : 0;
};

export default Bit;

export const add = (a, b) => a + b;

export const total = (shipping, subTotal) => {
  return "$" + add(shipping, subTotal);
};

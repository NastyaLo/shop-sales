export default function freeShipping(items, rate) {
  const total = items.reduce((accum, item) => {
    return accum += item.count * item.price;
  }, 0);

  return total >= rate;
}

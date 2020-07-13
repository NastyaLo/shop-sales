export default function bulkOrderDiscount(item, rates, maxRate) {
  const hundreds = ~~(item / 100) * 100;

  if (hundreds > maxRate) {
    return item.count * item.price * rates[maxRate];
  }

  if (rates[hundreds]) {
    return item.count * item.price * rates[hundreds];
  }

  return 0;
}

export default function oneFreeDiscount(item, groupCount) {
  const groups = ~~(item.count / groupCount);
  return item.price * (item.count - groups);
}

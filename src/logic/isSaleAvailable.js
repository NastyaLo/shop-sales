export default function isSaleAvailable(code, sale) {
  if (code !== sale.code) {
    return false;
  }

  const now = new Date();
  return now > sale.dateStart && now < sale.dateEnd;
}

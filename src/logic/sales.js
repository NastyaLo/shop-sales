import isSaleAvailable from "./isSaleAvailable";
import percentDiscount from "./percentDiscount";
import oneFreeDiscount from "./oneFreeDiscount";
import bundleDiscount from "./bundleDiscount";
import bulkOrderDiscount from "./bulkOrderDiscount";
import freeShipping from "./freeShipping";

// maybe to state to change values...
export const sales = [
  {
    id: 1,
    title: '10% discount',
    type: 'single',
    compatibility: true,
    percent: '0.1',
    code: 'promo',
    dateStart: null,
    dateEnd: null,
    isAvailable: isSaleAvailable,
    discount: (item) => percentDiscount(item, this.percent),
  },
  {
    id: 2,
    title: '3 + 1 discount',
    apply: 'auto',
    dateStart: null,
    dateEnd: null,
    groupCount: 4,
    isAvailable: isSaleAvailable,
    discount: (item) => oneFreeDiscount(item, this.groupCount),
  },
  {
    id: 3,
    title: 'Bundle discount',
    apply: 'auto',
    dateStart: null,
    dateEnd: null,
    pair: [1, 2],
    percent: 0.2,
    isAvailable: isSaleAvailable,
    // here we need only to count price, mb return ids
    discount: (items) => bundleDiscount(items, this.pair, this.percent),
  },
  {
    id: 4,
    title: 'Bulk order discount',
    apply: 'auto',
    dateStart: null,
    dateEnd: null,
    rates: {
      100: 0.1,
      200: 0.15,
      300: 0.20,
    },
    maxRate: 300,
    isAvailable: isSaleAvailable,
    discount: (item) => bulkOrderDiscount(item, this.rates, this.maxRate),
  },
  {
    id: 5,
    title: 'Free shipping over $100',
    apply: 'auto',
    dateStart: null,
    dateEnd: null,
    rate: 100,
    isAvailable: isSaleAvailable,
    discount: (items) => freeShipping(items, this.rate),
  }
];

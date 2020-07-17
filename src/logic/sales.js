import isSaleAvailable from "./isSaleAvailable";
import percentDiscount from "./percentDiscount";
import oneFreeDiscount from "./oneFreeDiscount";
import bundleDiscount from "./bundleDiscount";
import bulkOrderDiscount from "./bulkOrderDiscount";
import freeShipping from "./freeShipping";

// {
//   id: number
//   title: string
//   compatibility: boolean (if true - can be applied with other sale at the same moment)
//   percent: number,
//   code: string,
//   dateStart: Date | null,
//   dateEnd: Date | null,
//   apply: 'code' | 'auto',
//   isAvailable: function: boolean,
//   discount: function: number,
// }

export const sales = [
  {
    id: 1,
    title: '10% discount',
    compatibility: true,
    percent: '0.1',
    code: 'promo',
    dateStart: null,
    dateEnd: null,
    apply: 'code',
    isAvailable: (code) => isSaleAvailable(code, this),
    discount: (item) => percentDiscount(item, this.percent),
  },
  {
    id: 2,
    title: '3 + 1 discount',
    apply: 'auto',
    dateStart: null,
    dateEnd: null,
    groupCount: 4,
    isAvailable: (code) => isSaleAvailable(code, this),
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
    isAvailable: (code) => isSaleAvailable(code, this),
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
    isAvailable: (code) => isSaleAvailable(code, this),
    discount: (item) => bulkOrderDiscount(item, this.rates, this.maxRate),
  },
  {
    id: 5,
    title: 'Free shipping over $100',
    apply: 'auto',
    dateStart: null,
    dateEnd: null,
    rate: 100,
    isAvailable: (code) => isSaleAvailable(code, this),
    discount: (items) => freeShipping(items, this.rate),
  }
];

export const state = {
  shopItems: [
    {
      id: 1,
      price: 1000,
      title: 'Iphone',
    },
    {
      id: 2,
      price: 3500,
      title: 'Macbook',
    },
  ],
  basket: [],
  sales: [
    {
      id: 1,
      title: '10% discount',
      apply: 'code',
      discount: item => (item.price - (item.discount || 0)) * 0.1,
    },
    {
      id: 2,
      title: '3 + 1 discount',
      apply: 'auto',
      dateStart: null,
      dateEnd: null,
      countDiscount: item =>
    }
  ]
};

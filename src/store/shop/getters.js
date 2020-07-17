export const getters = {
  shopItems: state => state.shopItems,
  basketItems: (state) => {
    const ids = state.basket.map(item => item.id);
    return state.shopItems.filter(item => ids.includes(item.id))
  },
  compatibleSales: state => state.sales.filter(sale => sale.compatibility),
  incompatibleSales: state => state.sales.filter(sale => !sale.compatibility)
};

export const getters = {
  shopItems: state => state.shopItems,
  basketIds: state => state.basket,
  basketItems: (state) => {
    const ids = state.basket.map(item => item.id);
    return state.shopItems.filter(item => ids.includes(item.id))
  },
};

export const mutations = {
  'ADD_SALE_TYPE'(state, sale) {
      state.sales.push(sale);
  },
  'ADD_TO_BASKET'(state, id) {
    const item = state.basket.find(i => i.id === id);

    if (!item) {
      state.basket.push({
        id: id,
        count: 1,
        sales: [],
      });
    } else {
      item.count += 1;
    }
  },
  'REMOVE_FROM_BASKET'(state, id) {
    const itemIndex = state.basket.findIndex(i => i.id === id);

    if (itemIndex === -1) {
      alert('No such item in basket');
      return;
    }

    const item = state.basket[itemIndex];
    item.count -= 1;

    if (item.count === 0) state.basket.splice(itemIndex, 1)
  },
  'RESET_SALES'(state, itemId) {
    const item = state.basket.find(item => item.id === itemId);

    if (item) {
      item.sales = [];
    }
  },
  'APPLY_SALE'(state, { itemId, saleId, saleProfit }) {
    const item = state.basket.find(item => item.id === itemId);

    if (item) {
      item.sales.push({
        saleId,
        saleProfit,
      });
    }
  }
};

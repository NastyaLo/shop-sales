import { sales } from "../../logic/sales";

export const actions = {
  fetchSales({commit}) {
    sales.forEach((elem) => {
      const sale = { ...elem };

      // this props could be configured in admin panel
      sale.compatibility = false;
      sale.apply = 'code'; // auto
      sale.code = `promo${sale.id}`;
      sale.dateStart = null;
      sale.dateEnd = null;

      commit('ADD_SALE_TYPE', sale);
    });
  },
  addToBasket({commit}, { id }) {
    commit('ADD_TO_BASKET', id);
  },
  removeFromBasket({commit}, { id }) {
    commit('REMOVE_FROM_BASKET', id);
  },
  resetSales({commit}, itemId) {
    commit('RESET_SALES', itemId);
  },
  applySale({commit}, { itemId, saleId, saleProfit }) {
    commit('APPLY_SALE', { itemId, saleId, saleProfit });
  }
};

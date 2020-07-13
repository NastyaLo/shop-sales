export const actions = {
  addToBasket({commit}, { id }) {
    commit('ADD_TO_BASKET', id);
  },
  removeFromBasket({commit}, { id }) {
    commit('REMOVE_FROM_BASKET', id);
  }
};

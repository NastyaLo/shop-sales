import Vue from 'vue';
import Vuex from 'vuex';
import orders from './shop/shop';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        namespaced: true,
        strict: true,
        orders,
    },
});

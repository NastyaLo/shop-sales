<template>
  <div>
    <span>Product: {{ title }}</span>
    <span>cost: ${{ price }}</span>
    <span>in basket: {{ inBasketAmount }}</span>
    <button
      @click="addToBasket"
    >
      Add to basket
    </button>
    <button
      v-if="inBasketAmount > 0"
      @click="removeFromBasket"
    >
      Remove from basket
    </button>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "ShopItem",
    props: ['title', 'price', 'id'],
    computed: {
      inBasketAmount() {
        const item = this.basketItems().find(i => i.id === this.id);
        if (!item) return 0;

        return item.count;
      },
    },
    methods: {
      ...mapGetters(['basketItems']),
      addToBasket() {
        this.$store.dispatch('addToBasket', { id: this.id });
      },
      removeFromBasket() {
        const count = this.inBasketAmount;

        if (count > 0) {
          this.$store.dispatch('removeFromBasket', { id: this.id });
        }
      }
    }
  }
</script>

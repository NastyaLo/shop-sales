<template>
  <div class="basket">
    Basket
    <br>
    Your items:
    <ShopItems
      :items="basketItems"/>
    <input v-model="code">
    <button @click="checkCode">Apply code</button>
  </div>
</template>

<script>
  import ShopItems from "./ShopItems";
  import { sales } from "../logic/sales";

  export default {
    name: "Basket",
    components: {ShopItems},
    data: function() {
      return {
        code: '',
        appliedCode: '',
        appliedSales: {}
      };
    },
    computed: {
      basketItems() {
        return this.$store.getters.basketItems;
      },
    },
    watch: {
      basketItems() {
        const maxSale = {
          sale: 0,
          id: undefined,
        };

        this.sales.forEach()
      }
    },
    methods: {
      getMaxSale() {

      },
      getDeliverySale() {

      },
      checkCode() {
        const isCodeExists = this.sales.find(i => i.code === this.code);

        if (isCodeExists) {
          this.appliedCode = this.code;
          alert('Code was successfully applied')
        } else {
          alert('Code was not been found');
        }
      }
    }
  }
</script>

<style>
  .basket {
    display: flex;
    flex-direction: column;
  }
</style>

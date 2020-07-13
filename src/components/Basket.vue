<template>
  <div class="basket">
    Basket
    <br>
    Your items:
    <ShopItems
      :items="basketItems()"/>
  </div>
</template>

<script>
  import ShopItems from "./ShopItems";
  import {mapGetters} from "vuex";

  export default {
    name: "Basket",
    components: {ShopItems},
    methods: {
      ...mapGetters(['basketItems'])
    }
  }
</script>

<style>
  .basket {
    display: flex;
    flex-direction: column;
  }
</style>

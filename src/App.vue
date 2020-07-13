<template>
  <div id="app">
    <h1>Shop</h1>
    <div class="shop">
      <ShopItems :items="shopItems()"/>
      <Basket/>
    </div>
    <Admin/>
  </div>
</template>

<script>
import Admin from "./components/Admin";
import ShopItem from "./components/ShopItem";
import { mapGetters } from "vuex";
import Basket from "./components/Basket";
import ShopItems from "./components/ShopItems";

export default {
  name: 'app',
  components: {ShopItems, Basket, ShopItem, Admin},
  data () {
    return {}
  },
  methods: {
    ...mapGetters(['shopItems'])
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.shop {
  display: flex;
  justify-content: space-between;

  margin: 20px;
}
</style>

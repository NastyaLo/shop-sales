<template>
  <div class="catalog">
    <ShopItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :price="item.price"
      :title="item.title"
      :sales="item.sales"
    />
  </div>
</template>

<script>
import ShopItem from "./ShopItem";

export default {
  name: "BasketItems",
  props: ['items'],
  components: {
    ShopItem,
  }
}
</script>

<style>
  .catalog {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
</style>

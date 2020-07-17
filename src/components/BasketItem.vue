<template>
  <div>
    <ShopItem
      :id="id"
      :price="price"
      :title="title"
    />
    {{ JSON.stringify(sales) }}
  </div>
</template>

<script>
  import ShopItem from './ShopItem.vue';

  export default {
    name: "ShopItem",
    props: ['title', 'price', 'id', 'sales'],
    components: {
      ShopItem,
    },
  }
</script>

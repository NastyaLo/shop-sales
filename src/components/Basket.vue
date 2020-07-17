<template>
  <div class="basket">
    Basket
    <br>
    Your items:
    <BasketItems
      :items="basketItems"/>
    <input v-model="code">
    <button @click="checkCode">Apply code</button>
    <button @click="applySales">count sale</button>
  </div>
</template>

<script>
  import BasketItems from "./BasketItems.vue";

  export default {
    name: "Basket",
    components: {
      BasketItems,
    },
    data: function () {
      return {
        code: '',
        appliedCode: '',
      };
    },
    computed: {
      basketItems() {
        return this.$store.getters.basketItems;
      },
      compatibleSales() {
        return this.$store.getters.compatibleSales;
      },
      incompatibleSales() {
        return this.$store.getters.incompatibleSales;
      }
    },
    beforeMount() {
      this.$store.subscribe(((mutation) => {
        if (['ADD_TO_BASKET', 'REMOVE_FROM_BASKET'].includes(mutation.type)) {
          this.applySales();
        }
      }));
    },
    methods: {
      applySales() {
        this.basketItems.forEach((item) => {
          // in enterprise here should be async/await
          this.resetSales(item.id);
          this.applyMaxIncompatible(item);
          this.applyCompatible(item);
        });
      },
      resetSales(itemId) {
        this.$store.dispatch('resetSales', itemId);
      },
      applyMaxIncompatible(item) {
        const maxDiscount = {};

        this.incompatibleSales.forEach((sale) => {
          const isSaleValid = sale.isAvailable(this.appliedCode);
          if (!isSaleValid) return;

          const profit = sale.discount(item);

          if (profit > maxDiscount.profit) {
            maxDiscount.profit = profit;
            maxDiscount.id = sale.id;
          }
        })

        this.$store.dispatch('applySale', {
          itemId: item.id,
          saleId: maxDiscount.id,
          saleProfit: maxDiscount.profit
        });
      },
      applyCompatible(item) {
        // here we can add priority parameter for sale
        this.compatibleSales.forEach((sale) => {
          const isSaleValid = sale.isAvailable(this.appliedCode);
          if (!isSaleValid) return;

          this.$store.dispatch('applySale', {
            itemId: item.id,
            saleId: sale.id,
            saleProfit: sale.discount(item),
          });
        });
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

<template>
  <div class="product_box">
    <h1>{{  product.name }}</h1>
    <img src="../assets/product1.png" width="200px">
    <p>{{  formattedPrice }}</p>
    <p>{{ isAvailable() }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      product: {
      name: 'Product 1',
      price: '99.99',
      imgUrl: '',
      available: 0
      }
    };
  },
  computed: {
    formattedPrice() {
      let newPrice = `$${this.product.price}`;
      return newPrice;
    }
  },

  methods: {
    isAvailable() {
      if (this.product.available > 0) {
        return 'Available';
      } else {
        return 'Out of stock';
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.product_box { 
  width: 400px;
  height: 400px;
  border: 1px solid black;
}
</style>
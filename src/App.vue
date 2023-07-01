<template>
  <div id="app" class="center">
    <Header />
    <ProductDetails />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    Header,
    ProductDetails,
    Footer    
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}


</style>

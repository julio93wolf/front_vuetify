<template>
  <v-container>
    <h1>Feed</h1>
    <products></products>
  </v-container>
</template>

<script>
import Products from './product/Products.vue'
export default {
  components: {
    'products': Products
  }
}
</script>

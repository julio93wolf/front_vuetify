<template>
  <v-layout row wrap align-center>
    <cmpt-product 
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></cmpt-product>
  </v-layout>
</template>

<script>
import Product from './Product'

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    'cmpt-product': Product
  },
  created () {
    this.$http.get('api/products')
    .then(response => {
      this.products = response.body
    })
  }
}
</script>

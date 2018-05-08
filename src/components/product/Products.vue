<template>
  <v-layout row wrap align-center>
    <cmpt-product 
      v-for="product in products"
      @deleteProduct="deleteProduct(product)"
      :key="product.id"
      :product="product"
      :authenticatedUser="authenticatedUser"
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
  computed: {
    authenticatedUser () {
      return this.$auth.getAuthenticatedUser()
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
  },
  methods: {
    deleteProduct (product) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.value) {
          this.$http.delete('api/products/' + product.id)
          .then(response => {
            let index = this.products.indexOf(product)
            this.products.splice(index, 1)
            console.log(response)
            this.$swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          })
        }
      })
    }
  }
}
</script>

<template>
  <v-form ref="form">
    <v-text-field
      v-model="product.name"
      :counter="255"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="product.price"
      label="Price"
      required
      type="number"
    ></v-text-field>
    <v-text-field
      v-model="product.description"
      label="Description"
      required
      multi-line
    ></v-text-field>
    <v-btn
      @click="update"
    >Update
    </v-btn>
    <v-btn :to="{name: 'Feed'}" >Cancel</v-btn>
  </v-form>
</template>

<script>
export default {
  created () {
    this.getProduct()
  },
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      this.$http.get('api/products/' + this.$route.params.product)
      .then(response => {
        this.product = response.body
      })
    },
    update () {
      console.log('update')
      this.$http.put('api/products/' + this.$route.params.product, this.product)
      .then(response => {
        // this.$router.push('/feed')
        this.$swal('Updated!', 'Your product has been updated', 'success')
      })
    }
  }
}
</script>
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
      @click="create"
    >Create
    </v-btn>
    <v-btn>clear</v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      product: {
        name: '',
        price: 0,
        description: ''
      }
    }
  },
  methods: {
    create () {
      console.log('create')
      this.$http.post('api/products', this.product)
      .then(response => {
        this.$router.push('/feed')
      })
    }
  }
}
</script>

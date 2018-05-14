<template>
  <v-form ref="form">
    <v-text-field
      v-model="product.name"
      :counter="255"
      label="Name"
      v-validate="'required'"
      :error-messages="errors.collect('name')"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="product.price"
      label="Price"
      type="number"
      v-validate="'required|decimal|min_value:0'"
      :error-messages="errors.collect('price')"
      data-vv-name="price"
      required
    ></v-text-field>
    <v-text-field
      v-model="product.description"
      label="Description"
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
  $_veeValidate: {
    validator: 'new'
  },
  created () {
    this.getProduct()
  },
  data () {
    return {
      product: {},
      dictionary: {
        attributes: {
          name: 'Nombre'
        },
        custom: {
          price: {
            required: 'El precio no puede estar vacio',
            decimal: 'Tiene que ser un numero'
          }
        }
      }
    }
  },
  mounted () {
    this.$validator.localize('es', this.dictionary)
  },
  methods: {
    getProduct () {
      this.$http.get('api/products/' + this.$route.params.product)
      .then(response => {
        this.product = response.body
      })
    },
    update () {
      this.$validator.validateAll()
      .then(response => {
        if (response) {
          this.$http.put('api/products/' + this.$route.params.product, this.product)
          .then(response => {
            // this.$router.push('/feed')
            this.$swal('Updated!', 'Your product has been updated', 'success')
            this.errors.items = []
          })
          .catch(response => {
            let errorsBody = response.body.errors
            for (var errorBody in errorsBody) {
              let error = {
                field: errorBody,
                msg: errorsBody[errorBody]
              }
              this.errors.items.push(error)
            }
          })
        }
      })
    }
  }
}
</script>
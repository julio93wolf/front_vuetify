<template>
  <v-form ref="form">
    <v-text-field
      v-model="product.name"
      label="Name"
      type="text"
      :counter="255"
      :error-messages="errors.collect('name')"
      v-validate="'required'"
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
      required
      multi-line
    ></v-text-field>
    <input type="file" @change="imageChanged" />
    <v-btn
      @click="create"
    >Create
    </v-btn>
    <v-btn :to="{name: 'Feed'}" >Cancel</v-btn>
  </v-form>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      product: {
        name: '',
        price: '',
        description: '',
        image: ''
      },
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
    create () {
      this.$validator.validateAll()
      .then(response => {
        if (response) {
          this.$http.post('api/products', this.product)
          .then(response => {
            this.$router.push('/feed')
          })
          .catch(response => {
            console.log(response)
          })
        }
      })
    },
    imageChanged (event) {
      console.log(event.target.files[0])
      var fileReader = new FileReader()
      fileReader.readAsDataURL(event.target.files[0])
      fileReader.onload = (event) => {
        this.product.image = event.target.result
      }
    }
  }
}
</script>

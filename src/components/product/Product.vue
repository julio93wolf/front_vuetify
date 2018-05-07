<template>
  <v-flex xs12 sm6 md3>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{product.name}}</h3>
          <div>{{product.price}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Whish list</v-btn>
        <v-btn flat color="orange">Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['product']
}
</script>

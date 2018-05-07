<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Test</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn 
      icon
      href="#/login">
      <v-icon>person</v-icon>
    </v-btn>
    <v-btn 
      icon
      href="#/register">
      <v-icon>person_add</v-icon>
    </v-btn>
    <v-btn
      icon
      v-on:click="logout">
      <v-icon>whatshot</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$auth.destroyToken()
      this.$router.push('/login')
    }
  }
}
</script>


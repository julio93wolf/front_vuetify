<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Test</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="text-xs-center">
      <v-btn 
        outline
        :to="{name:'Login'}"
        v-if="!isAuth">
        <v-icon>person</v-icon>Log in
      </v-btn>
      <v-btn 
        outline
        :to="{name: 'Register'}"
        v-if="!isAuth">
        <v-icon>person_add</v-icon>Register
      </v-btn>
      <v-btn
        outline
        v-on:click="logout"
        v-if="isAuth">
        <v-icon>whatshot</v-icon>Log out
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      isAuth: null
    }
  },
  created () {
    this.isAuth = this.$auth.isAuthenticated()
  },
  methods: {
    logout () {
      this.$auth.destroyToken()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>

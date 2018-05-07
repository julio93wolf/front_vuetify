<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field 
                  prepend-icon="contact_mail" 
                  name="email" 
                  label="Email" 
                  id="email" 
                  type="email"
                  v-model="email">
                </v-text-field>
                <v-text-field 
                  prepend-icon="lock" 
                  name="password" 
                  label="Password" 
                  id="password" 
                  type="password"
                  v-model="password">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn 
                color="primary"
                v-on:click="login"
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      var data = {
        client_id: 2,
        client_secret: 'fbm7wLnYE98ZWFl6JpCdvBdA9ApnV6hfMqdlhFL9',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }
      this.$http.post('http://localhost:8000/oauth/token', data)
      .then(response => {
        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
        this.$router.push('/feed')
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

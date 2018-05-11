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
                  v-model="email"
                  :error-messages="errors.collect('email')"
                  v-validate="'required|email'"
                  data-vv-name="email"
                  required>
                </v-text-field>
                <v-text-field 
                  prepend-icon="lock" 
                  name="password" 
                  label="Password" 
                  id="password" 
                  type="password"
                  v-model="password"
                  :error-messages="errors.collect('password')"
                  v-validate="'required|min:4'"
                  data-vv-name="password"
                  required>
                </v-text-field>
                <v-alert
                  :value="error.status"
                  type="error"
                  dismissible
                  transition="scale-transition"
                >
                  {{error.message}}
                </v-alert>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn 
                color="primary"
                v-on:click="validate"
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
  $_veeValidate: {
    validator: 'new'
  },
  data: () => {
    return {
      email: '',
      password: '',
      dictionary: {},
      error: {
        status: false,
        message: ''
      }
    }
  },
  mounted () {
    this.$validator.localize('es', this.dictionary)
  },
  methods: {
    login () {
      var data = {
        client_id: 2,
        client_secret: 'EkZDZHEam1xtdfIFedUvlrhxSKi1NqgIsZyHp39H',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }
      this.$http.post('oauth/token', data)
      .then(response => {
        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
        this.$router.push('/feed')
      })
      .catch(response => {
        let errorUser = {
          field: 'email',
          msg: response.body.message
        }
        let errorPassword = {
          field: 'password',
          msg: response.body.message
        }
        this.errors.items.push(errorUser)
        this.errors.items.push(errorPassword)
        console.log(response)
      })
    },
    validate () {
      this.$validator.validateAll()
      .then(response => {
        if (response) {
          this.login()
        }
      })
    }
  }
}
</script>

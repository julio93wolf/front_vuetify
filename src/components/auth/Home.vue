<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field 
                  prepend-icon="person" 
                  name="name" 
                  label="Name" 
                  id="name" 
                  type="text">
                </v-text-field>
                <v-text-field 
                  prepend-icon="contact_mail" 
                  name="email" 
                  label="Email" 
                  id="email" 
                  type="email">
                </v-text-field>
                <v-text-field 
                  prepend-icon="lock" 
                  name="password" 
                  label="Password" 
                  id="password" 
                  type="password">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn 
                color="primary"
                v-on:click="home"
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    home: () => {
      axios.post(`http://localhost:8000/api/login`, {
        body: {
          email: 'admin@appsamx.com',
          password: 'Appsa2016'
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

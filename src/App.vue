<template>
  <v-app>
    <v-content>
      <toolbar></toolbar>
      <v-container grid-list-md text-xs-center>
        <router-view></router-view>
      </v-container>  
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  components: {
    'toolbar': Toolbar
  },
  name: 'App'
}
</script>

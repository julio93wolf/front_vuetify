<template>
  <v-app>
      <toolbar></toolbar>
      <router-view/>
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

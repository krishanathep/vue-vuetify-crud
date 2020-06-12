<template>
  <v-app>
    <Navbar/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { store } from './store/index'

export default {
  store,
  name: 'App',
  components: {
    Navbar,Footer
  }
};
</script>

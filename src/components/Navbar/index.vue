<template>
  <div class='app'>
      <v-app-bar
      app
      color="primary"
      dark
    >

    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> 

    <v-toolbar-title>Vuetify crud</v-toolbar-title>
    
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/lego/0.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Krishanatap J.</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return{
            drawer: '',
            items: [
                { title: 'Home', icon: 'mdi-home', link: '/' },
                { title: 'About', icon: 'mdi-information', link: '/about' }
            ]
        }
    }
}
</script>

<style>

</style>
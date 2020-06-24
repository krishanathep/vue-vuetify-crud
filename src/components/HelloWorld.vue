<template>
  <v-container>
    <v-row>
      <v-col cols="" md="3" v-for="item in items" :key="item.title">
        <v-card class="mx-auto" max-width="344" tile :to="item.link">
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="80"
              :color="item.color"
            >
              <v-icon large="" color="white">{{item.icon}}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1"
                >{{item.title}}</v-list-item-title
              >
              <v-list-item-subtitle
                >{{item.subtitle}}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      { title: 'Repair Systems', subtitle: '999', icon:'mdi-cogs', color: 'error', link: '/repair' },
      { title: 'Blogs', subtitle: '1000', icon: 'mdi-post', color: 'info',link: '/blogs' },
      { title: 'Foods', subtitle: '45,200', icon: 'mdi-food', color: 'yellow',link: '/foods' },
      { title: 'Movies', subtitle: '9,000', icon: 'mdi-movie', color: 'success',link: '/movies' },
      { title: 'Shop', subtitle: '900', icon: 'mdi-cart', color: '#7E57C2', link: '/shopping' },
      { title: 'Members', subtitle: '800', icon: 'mdi-account-group', color: 'warning',link: '/members' }
    ]
  }),
};
</script>

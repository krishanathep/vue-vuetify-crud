<template>
  <v-container>
    <v-row>
      <v-col cols="" md="3" v-for="item in items" :key="item.title">
        <v-card class="mx-auto" max-width="344" tile>
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
      { title: 'CPU Traffig', subtitle: '100%', icon: 'mdi-cog', color: 'info' },
      { title: 'Likes', subtitle: '45,200', icon: 'mdi-thumb-up-outline', color: 'error' },
      { title: 'Sales', subtitle: '9,000', icon: 'mdi-cart', color: 'success' },
      { title: 'Members', subtitle: '800', icon: 'mdi-account-group', color: 'warning' }
    ]
  }),
};
</script>

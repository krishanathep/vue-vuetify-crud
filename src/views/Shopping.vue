<template>
  <v-app>
      <v-container>
            <ShoppingList/>
      </v-container>
  </v-app>
</template>

<script>
import ShoppingList from '../components/ShoppingList'
export default {
    components: {
        ShoppingList,
    }
}
</script>

<style>

</style>
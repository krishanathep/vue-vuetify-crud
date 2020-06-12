<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="" md="12">
          <v-btn
            class="mt-8"
            absolute
            dark
            fab
            top
            right
            color="pink"
            to="/shopping"
          >
            <v-icon>mdi-store</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="" md="12">
          <v-card>
            <v-data-table
              :headers="headers"
              :items="cart"
              :items-per-page="5"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>

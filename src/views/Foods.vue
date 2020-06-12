<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="" md="12">
          <v-card tile>
            <v-card-text>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn tile color="primary" dark class="mb-2" v-on="on"
                    >New Item</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            :value="name"
                            v-model="name"
                            label="Name"
                            v-on:change="name = $event.target.value"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            :value="price"
                            v-model="price"
                            label="Price"
                            v-on:change="price = $event.target.value"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close()">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="addFood()">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-text>
            <v-data-table
              :headers="headers"
              :items="$store.getters.foods"
              :key='index'
              :items-per-page="5"
            >
              <template v-slot:item.actions="{ index }">
                <v-icon small class="mr-2" @click="openEdit(index, food)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteFood(index)">
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      editedIndex: 0,
      name: "",
      price: "",
      headers: [  
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  created() {
      this.fetchFood()
  },
  methods: {
    fetchFood(){
        this.$store.dispatch('fetchFood')
    },  
    addFood() {
      if (this.name) {
        let payload = {  name: this.name, price: this.price };
        this.$store.dispatch("addFood", payload);
      }
      
      this.name = "";
      this.price = "";
      this.dialog = false;
    },
    
    openEdit(index, food) {
      this.editedIndex = index;
      
      this.name = food;
      this.price = food;

      this.dialog = true;
    },

    deleteFood(index) {
        this.$store.dispatch('deleteFood', index)
    },

    close() {
      this.name = "";
      this.price = "";

      this.dialog = false;
    },
  },
  computed: {
      formTitle () {
        return this.editedIndex === 0 ? 'New Item' : 'Edit Item'
      },
    },
};
</script>

<style></style>

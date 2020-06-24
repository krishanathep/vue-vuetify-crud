<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="" md="12">
          <v-card>
            <v-card-title>
              MEMBER LIST
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on"
                    >ADD NEW</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>
                    NEW MEMBER
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="12">
                          <v-text-field
                            v-model="user.name"
                            label="Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field
                            v-model="user.email"
                            label="Email"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field
                            v-model="user.phone"
                            label="Phone"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="onFormSubmit"
                      >Submit</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="close()"
                      >Cancel</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-title>
            <v-card-text>
              <v-simple-table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.key">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>
                      <router-link
                        :to="{ name: 'ViewMember', params: { id: user.key } }"
                        class="mr-3"
                        ><v-icon color="info">mdi-eye</v-icon></router-link
                      >
                      <router-link
                        :to="{ name: 'EditMember', params: { id: user.key } }"
                        class="mr-3"
                        ><v-icon color="success"
                          >mdi-pencil</v-icon
                        ></router-link
                      >
                      <v-icon
                        color="error"
                        @click.prevent="deleteUser(user.key)"
                        >mdi-delete</v-icon
                      >
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      dialog: false,
      users: [],
      user: {
        name: "",
        email: "",
        phone: "",
      },
      headers: [
        { text: "ID", value: "key" },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  created() {
    db.collection("users").onSnapshot((snapshotChange) => {
      this.users = [];
      snapshotChange.forEach((doc) => {
        this.users.push({
          key: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phone: doc.data().phone,
        });
      });
    });
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("users")
        .add(this.user)
        .then(() => {
          this.dialog = false;
          //alert("User successfully created!");
          this.user.name = "";
          this.user.email = "";
          this.user.phone = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    close() {
      this.name = "";
      this.price = "";
      this.dialog = false;
    },
  },
};
</script>

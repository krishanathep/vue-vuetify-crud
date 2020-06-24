<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="" md="12">
          <v-card>
            <v-card-title>
              ADD MEMBER
            </v-card-title>
            <v-form @submit.prevent="onFormSubmit" id="member-form">
              <v-card-text>
                <v-text-field label="Name" v-model="user.name"> </v-text-field>
                <v-text-field label="Email" v-model="user.email">
                </v-text-field>
                <v-text-field label="Phone" v-model="user.phone">
                </v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" type="submit" form="member-form">
                  ADD MEMBER
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="" md="12">
          <v-card>
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
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.phone}}</td>
                  <td>
                    <router-link :to="{name: 'ViewMember', params: { id: user.key }}" class="mr-3"><v-icon color="info">mdi-eye</v-icon></router-link>
                    <router-link :to="{name: 'EditMember', params: { id: user.key }}" class="mr-3"><v-icon color="success">mdi-pencil</v-icon></router-link>
                    <v-icon color="error" @click.prevent="deleteUser(user.key)">mdi-delete</v-icon>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
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
          alert("User successfully created!");
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
  },
};
</script>

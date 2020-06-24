<template>
  <v-container>
    <v-row>
      <v-col cols="" md="12">
        <v-card>
          <v-card-title>
            VIEW MEMBER
          </v-card-title>
          <v-card-text>
            <p>Name : {{ user.name }}</p>
            <p>Email : {{ user.email }}</p>
            <p>Phone : {{ user.phone }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="cancelClick" color="error">
              CANCEL
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../firebaseDb";
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    let dbRef = db.collection("users").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.user = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    cancelClick() {
      this.$router.push("/members");
    },
  },
};
</script>

<style></style>

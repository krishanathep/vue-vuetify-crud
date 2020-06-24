<template>
  <v-container>
    <v-row>
      <v-col cols="" md="12">
        <v-card>
          <v-card-title>
            UPDATE MEMBER
          </v-card-title>
          <v-form @submit.prevent="onUpdateForm" id="update-form">
            <v-card-text>
              <v-text-field label="Name" v-model="user.name"> </v-text-field>
              <v-text-field label="Email" v-model="user.email"> </v-text-field>
              <v-text-field label="Phone" v-model="user.phone"> </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" type="submit" form="update-form">
                UPDATE
              </v-btn>
              <v-btn @click="cancelClick" color="error">
                CANCEL
              </v-btn>
            </v-card-actions>
          </v-form>
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
      onUpdateForm(event){
          event.preventDefault()
          db.collection('users').doc(this.$route.params.id)
          .update(this.user).then(()=>{
              console.log('User successfully updated!')
              this.$router.push('/members')
          }).catch((error)=>{
              console.log(error)
          })
      },
      cancelClick() {
      this.$router.push('/members')
    }
  }
};
</script>

<style></style>

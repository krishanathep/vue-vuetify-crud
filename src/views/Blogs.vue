<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="" md="12">
          <v-card tile>
            <v-card-text>
              <v-container>
                <v-form @submit="onSubmit" id="blog-form">
                  <v-text-field label="Title" v-model="form.title" />
                  <v-text-field label="Body" v-model="form.body" />
                  <v-text-field label="Image" v-model="form.image" />
                  <v-btn
                    type="submit"
                    form="blog-form"
                    tile
                    block=""
                    color="primary"
                    >Submit</v-btn
                  >
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="" md="3" v-for="blog in blogs" :key="blog.id">
          <v-card tile>
            <v-img :src="blog.image" />
            <v-card-title>
              {{blog.title}}
            </v-card-title>
            <v-card-subtitle>
              {{blog.body}}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn tile text color="primary">view</v-btn>
              <v-btn tile text color="error">remove</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: [],
      form: {
        title: "",
        body: "",
        image: "",
      },
    };
  },
  created() {
    this.fetchBlogs();
  },
  methods: {
    fetchBlogs() {
      axios
        .get("https://vuejs-liff.firebaseio.com/blogs.json")
        .then((res) => (this.blogs = res.data))
        .catch((err) => {
          console.log(err);
        });
    },
    async onSubmit(e) {
      e.preventDefault()
      await axios
        .post("https://vuejs-liff.firebaseio.com/blogs.json", this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.form.title = "";
      this.form.body = "";
      this.form.image = "";
    },
  },
};
</script>

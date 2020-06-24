<template>
  <v-container>
    <v-row>
        <v-col cols="12" md="6">
            <v-card>
                <v-img :src="singleMovie.Poster" />
                <v-card-title>
                    {{singleMovie.Title}}
                </v-card-title>
                <v-card-subtitle>
                    {{singleMovie.Plot}}
                </v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      singleMovie: "",
    };
  },
  mounted() {
    axios
      .get(
        "http://www.omdbapi.com/?apikey=b76b385c&i=tt0120616&Content-Type=application/json"
      )
      .then((response) => {
        this.singleMovie = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>

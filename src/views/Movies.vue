<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="" md="12">
          <v-text-field
            label="Search"
            v-model="query"
            @keyup="searchMovie(query)"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="3" v-for="movie in movies" :key="movie.id">
          <v-card tile :to="`/moviedetail/` + movie.id">
            <v-img
              :src="
                `https://image.tmdb.org/t/p/w300_and_h450_bestv2` +
                  movie.poster_path
              "
            />
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
      movies: [],
      query: "",
    };
  },

  mounted() {
    this.fetchMovie();
  },

  methods: {
    fetchMovie() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&language=en-US&page=1"
        )
        .then((response) => (this.movies = response.data.results));
    },
    searchMovie(query) {
      if (query == "") {
        this.fetchMovie();
      } else {
        axios
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&query=" +
              query
          )
          .then((response) => {
            this.movies = response.data.results;
          });
      }
    },
  },
};
</script>

<style></style>

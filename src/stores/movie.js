import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [],
    movie: [],
  }),

  getters: {
    getMovies: (state) => state.movies,
    getMovie: (state) => state.movie,
  },
  actions: {
    async fetchDetailsMovie(movieId = "tt3896198") {
      if (movieId !== "" && movieId !== undefined) {
        this.movie = [];
        const response = await api({
          url: `http://www.omdbapi.com/?i=${movieId}&apikey=2f9d16be&plot=full&type=movie`,
        });
        this.movie.push(response.data);
        // console.log("this.movie", this.movie);
      }
    },
    async fetchSearchMovie(search = "avengers") {
      this.movie = [];
      const response = await api(
        `https://www.omdbapi.com/?s=${search}&apikey=2f9d16be&plot=full&type=movie`
      );
      this.movies = [...response.data.Search];
    },
  },
});

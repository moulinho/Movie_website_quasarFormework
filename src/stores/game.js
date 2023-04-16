import { api } from "src/boot/axios";

export const useGame = defineStore("game", {
  state: () => ({
    games: [],
  }),

  getters: {
    allGames(state) {
      return state.games;
    },
  },
  actions: {
    async fetchAllGames() {
      this.games = [];
      const response = await api(
        "http://www.omdbapi.com/?i=tt3896198&apikey=2f9d16be"
      );
      this.games = response.data;
    },
    async fetchSearchGames(search = "") {
      this.games = [];
      const response = await api(
        `http://www.omdbapi.com/?i=tt3896198&apikey=2f9d16be&s=${search}&type=games`
      );
      this.games = response.data;
    },
  },
});

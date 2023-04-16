import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useSerieStore = defineStore("serie", {
  state: () => ({
    series: [],
    serie: [],
    season: [],
  }),

  getters: {
    getSeries: (state) => state.series,
    getSerie: (state) => state.serie,
    getEpisodes: (state) => state.season,
  },
  actions: {
    async fetchDetailsSeries(serieId = "tt0944947") {
      this.serie = [];
      const response = await api(
        `http://www.omdbapi.com/?i=${serieId}&apikey=2f9d16be`
      );
      this.serie.push(response.data);
    },

    async fetchSerie(search = "Game of Thrones") {
      this.series = [];
      this.season = [];
      const response = await api(
        `https://www.omdbapi.com/?t=${search}&apikey=2f9d16be&plot=full`
      );
      // console.log("serie", response.data);
      this.series.push(response.data);

      if (parseInt(response.data.totalSeasons) > 1) {
        for (let i = 1; i < parseInt(response.data.totalSeasons); i++) {
          let datas = await this.fetchSeasonSeries(response.data.imdbID, i);
          this.season.push(datas);
        }
      }
    },

    async fetchSeasonSeries(serieId, season) {
      const res = await api(
        `https://www.omdbapi.com/?i=${serieId}&Season=${season}&apikey=2f9d16be&plot=full`
      );
      return res.data;
    },
  },
});

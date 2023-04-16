<template>
  <q-page class="">
    <div class="row justify-end">
      <div class="">
        <search-item @searchValue="onSearch" />
      </div>
    </div>
    <div class="q-mt-xl">
      <list-movie :item="movies" />
    </div>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "src/stores/movie";
import SearchItem from "src/components/SearchItem.vue";
import ListMovie from "src/components/movie/ListMovie.vue";
import { ref } from "vue";
const movieStore = useMovieStore();
movieStore.fetchSearchMovie();
let listMovie = ref();
const { movies } = storeToRefs(movieStore);

let onSearch = (params) => {
  movieStore.fetchSearchMovie(params.search);
};
</script>
<style>
</style>

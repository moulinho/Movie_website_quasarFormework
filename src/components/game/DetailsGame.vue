<template>
  <div class="col-3" v-for="item in detailMovie" :key="item.imdbID">
    <q-card flat class="q-ma-md my-card cursor-pointer">
      <q-card-section class="justify-center text-center">
        <q-img
          :src="item.Poster"
          class="col-4"
          height="35rem"
          width="25rem"
          fit="cover"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <div class="text-h5 text-bold">{{ item.Title }}</div>
            <div class="text-subtitle2">Year: {{ item.Year }}</div>
            <div>{{ item.Type }}</div>
          </div>
        </q-img>
        <q-card-section class="">
          <div class="column justify-around">
            <span class="text-subtitle2">
              <q-icon name="star" color="yellow" />
              {{ item.imdbRating }}
              <span class="text-subtitle2">Genre: {{ item.Genre }}</span>
            </span>
            <span class="text-subtitle2">Actors: {{ item.Actors }}</span>
            <span class="text-subtitle2">Writer: {{ item.Writer }}</span>
            <span class="text-subtitle2">Language: {{ item.Language }}</span>
            <span class="text-subtitle2">Duration: {{ item.Runtime }}</span>
            <span class="">
              {{ item.Plot }}
            </span>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "src/stores/movie";
import { ref, watchEffect } from "vue";

const props = defineProps({
  details: String,
});
let detailMovie = ref();
const movieStore = useMovieStore();
watchEffect(() => {
  movieStore.fetchDetailsMovie(props.details);
  const { movie } = storeToRefs(movieStore);
  detailMovie.value = movie.value;
});
</script>

<style lang="scss" scoped>
</style>

<template>
  <q-card
    flat
    class="q-ma-md my-card cursor-pointer text-white rounded-borders"
    style="background: #000550"
    v-for="item in detailMovie"
    :key="item.imdbID"
  >
    <q-card-section class="justify-center">
      <q-img
        :src="item.Poster"
        class="col-4"
        height="35rem"
        width="25rem"
        fit="cover"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          <div class="text-h5 text-bold">{{ item.Title }}</div>
          <div class="text-subtitle2">
            <span class="text-bold text-body1">Year: </span>{{ item.Year }}
          </div>
          <div>
            <span class="ext-boldtext-body1"> {{ item.Type }}</span>
          </div>
        </div>
      </q-img>
      <q-card-section class="">
        <div class="column justify-around">
          <span class="text-bold text-body1">
            <q-icon name="star" color="yellow" />
            {{ item.imdbRating }}
          </span>
          <span class="text-subtitle2">
            <span class="text-bold text-body1">Genre:</span>
            {{ item.Genre }}
          </span>
          <span class="text-subtitle2">
            <span class="text-bold text-body1">Actors:</span>
            {{ item.Actors }}</span
          >
          <span class="text-subtitle2"
            ><span class="text-bold text-body1">Writer: </span
            >{{ item.Writer }}</span
          >
          <span class="text-subtitle2"
            ><span class="text-bold text-body1">Language:</span>
            {{ item.Language }}</span
          >
          <span class="text-subtitle2"
            ><span class="text-bold text-body1">Duration:</span>
            {{ item.Runtime }}</span
          >
          <span class="q-my-md text-justify">
            {{ item.Plot }}
          </span>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
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

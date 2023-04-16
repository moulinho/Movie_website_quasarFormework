<template>
  <q-card
    flat
    class="q-ma-md my-card"
    v-for="item in props.item"
    :key="item.imdbID"
  >
    <q-card-section class="justify-center" horizontal>
      <q-img
        :src="item.Poster"
        class="col-5"
        height="30rem"
        width="20rem"
        fit="cover"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          <div class="text-h5 text-bold">{{ item.Title }}</div>
          <div class="text-subtitle2">Year: {{ item.Year }}</div>
          <div>{{ item.Type }}</div>
        </div>
      </q-img>
      <q-card-section class="col-4">
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
            {{ item.Actors }}
          </span>
          <span class="text-subtitle2">
            <span class="text-bold text-body1">Writer: </span>{{ item.Writer }}
          </span>
          <span class="text-subtitle2">
            <span class="text-bold text-body1">Language: </span>
            {{ item.Language }}
          </span>
          <span class="text-subtitle2"
            ><span class="text-bold text-body1"> Season: </span>
            {{ item.totalSeasons }}</span
          >
          <span class="q-my-md text-justify">
            {{ item.Plot }}
          </span>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>

  <list-season :item-season="props.itemSeason" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import ListSeason from "src/components/serie/ListSeason.vue";
import { storeToRefs } from "pinia";
import { useSerieStore } from "src/stores/serie";

const props = defineProps({
  item: Object,
  itemSeason: Array,
});
console.log("item", props.item);
console.log("itemSeason", props.itemSeason);
</script>

<style  scoped>
</style>

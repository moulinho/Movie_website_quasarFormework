<template>
  <q-page class="">
    <div class="row justify-end">
      <div class="">
        <search-item @searchValue="onSearch" />
      </div>
    </div>
    <div class="q-mt-xl">
      <list-serie :item="series" :itemSeason="season" />
    </div>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useSerieStore } from "src/stores/serie";
import SearchItem from "src/components/SearchItem.vue";
import ListSerie from "src/components/serie/ListSerie.vue";
import { ref } from "vue";
const serieStore = useSerieStore();
serieStore.fetchSerie();
let listMovie = ref();
const { series, season } = storeToRefs(serieStore);

let onSearch = (params) => {
  serieStore.fetchSerie(params.search);
};
</script>

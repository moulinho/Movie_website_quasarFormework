<template>
  <div class="row justify-center q-my-xl">
    <q-card
      class="q-ma-md my-card cursor-pointer"
      v-for="item in itemSeason"
      :key="item.imdbID"
      @click="(confirm = !confirm), (itemEpisode = item)"
    >
      <q-card-section class="justify-center text-center">
        <div class="text-h6 text-bold">Season: {{ item.Season }}</div>
        <div>Episode :{{ item.Episodes.length }}</div>
        <div class="text-subtitle2">{{ item.Title }}</div>
      </q-card-section>
    </q-card>

    <q-dialog
      v-model="confirm"
      transition-show="jump-up"
      transition-hide="jump-down"
    >
      <q-card style="width: 450px">
        <episode-serie :episode="itemEpisode.Episodes" />
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import EpisodeSerie from "src/components/serie/EpisodeSerie.vue";

import { ref, watchEffect } from "vue";

const props = defineProps({
  itemSeason: Object,
});
let confirm = ref(false);
let itemEpisode = ref();
</script>

<style lang="scss" scoped>
</style>

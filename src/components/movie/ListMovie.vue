<template>
  <q-page-container style="padding-top: 0">
    <q-page padding class="row">
      <div
        class="col-md-3 col-sm-12"
        v-for="item in props.item"
        :key="item.imdbID"
      >
        <q-card
          flat
          class="q-ma-md my-card cursor-pointer"
          @click="(movieId = item.imdbID), (drawer = true)"
        >
          <q-card-section class="justify-center" horizontal>
            <q-img
              :src="item.Poster"
              class="col-4"
              height="30rem"
              width="80%"
              fit="cover"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                <div class="text-h5 text-bold">{{ item.Title }}</div>
                <div class="text-subtitle2">Year: {{ item.Year }}</div>
                <div>{{ item.Type }}</div>
              </div>
            </q-img>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </q-page-container>

  <q-drawer
    side="right"
    v-model="drawer"
    show-if-above
    :width="500"
    :breakpoint="0"
    class="details_drawer"
  >
    <q-btn
      flat
      @click="drawer = !drawer"
      round
      dense
      icon="close"
      class="q-ml-xl"
    />
    <details-movie :details="movieId" />
  </q-drawer>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DetailsMovie from "src/components/movie/DetailsMovie.vue";

const props = defineProps({
  item: Object,
});
let drawer = ref(true);
onMounted(() => {
  drawer.value = !drawer.value;
});
let movieId = ref("");
</script>

<style  scoped>
</style>

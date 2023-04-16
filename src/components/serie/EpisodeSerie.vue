<template>
  <q-card-section>
    <q-btn
      unelevated
      size="sm"
      color="negative"
      icon="close"
      round
      v-close-popup
      class="absolute-right q-ma-sm"
    />
  </q-card-section>

  <q-card-section>
    <q-list v-for="item in props.episode" :key="item.imdbID">
      <q-item>
        <q-item-section>
          <q-item-label>{{ item.Title }}</q-item-label>
          <q-item-label caption lines="2"
            >Episode: {{ item.Episode }}</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <span class="text-bold">
            <q-icon name="star" color="yellow" />{{ item.imdbRating }}
          </span>
          <q-item-label caption>{{ item.Released }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    </q-list>
  </q-card-section>
</template>

<script setup>
const props = defineProps({
  episode: Array,
});
</script>

<style lang="scss" scoped>
</style>

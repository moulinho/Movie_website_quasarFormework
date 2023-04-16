<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-pa-sm" style="background: #abb8c3">
      <q-toolbar>
        <q-toolbar-title class="text-bold" style="color: #000550">
          Test-movie
        </q-toolbar-title>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-toolbar>
    </q-header>

    <q-page-container style="padding-right: 0px">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Movie",
    // icon: "movie",
    link: "/Movie",
  },
  {
    title: "Serie",
    // icon: "live_tv",
    link: "/Serie",
  },
  // {
  //   title: "Game",
  //   // icon: "sports_esports",
  //   link: "/Game",
  // },
];
</script>

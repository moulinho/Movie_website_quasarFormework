<template>
  <div class="q-pa-md">
    <div class="text-primary rounded-borders">
      <q-form @submit.prevent="onSearch" class="q-gutter-md">
        <div class="row justify-around items-center">
          <q-toggle
            v-model="stateMode"
            color="dark"
            :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
            :label="$q.dark.isActive ? 'dark mode' : 'light mode'"
            @click="toggleDarkMode"
          />
          <input
            id="startdate"
            name="startdate"
            min="1900"
            max="2100"
            type="date"
          />

          <q-input
            dense
            outlined
            v-model="form.search"
            input-class="text-right"
            class="q-ml-md"
          >
            <template v-slot:append>
              <q-icon v-if="form.search === ''" name="search" color="primary" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="form.search = ''"
              />
            </template>
          </q-input>

          <div class="q-mx-lg">
            <q-btn
              label="Search"
              padding="sm lg"
              type="submit"
              no-caps
              text-color="white"
              unelevated
              style="background: #000550"
            />
          </div>
        </div>
      </q-form>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useQuasar } from "quasar";
const emit = defineEmits(["searchValue"]);

let form = ref({});
const $q = useQuasar();
let stateMode = ref($q.dark.isActive);
let toggleDarkMode = () => {
  $q.dark.toggle();
};

watchEffect(() => $q.dark.isActive);
let onSearch = () => {
  emit("searchValue", form.value);
};
</script>
<style>
body.body--dark {
  background: #333333;
}
</style>

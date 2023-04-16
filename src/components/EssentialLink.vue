<template>
  <q-list>
    <q-item
      :to="`/${title}`"
      clickable
      class="items-center"
      active-class="link_active"
    >
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-body1 q-mt-xs">{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
<style scoped>
.link_active {
  background-color: #000550;
  color: white;
  border-radius: 5px;
}
</style>

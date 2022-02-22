<template>
  <google-marker v-if="provider === 'google'" :options="options"/>
  <!-- <leaflet-marker v-else-if="provider === 'leaflet'" :options="options"/> -->
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'NuxtMarker',
  components: {
    // Marker
    GMarker: defineAsyncComponent(() => import('./providers/google/GMarker.vue')),
    // LMarker: defineAsyncComponent(() => import('./providers/leaflet/LMarker.vue'))
  },
  props: {
    // TODO: add types for options https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
    options: {
      type: Object,
      default: () => ({})
    },
    provider: {
      type: String,
      required: true,
    }
  },
})
</script>

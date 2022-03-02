<template>
  <g-marker v-if="mapProviderConfig.provider === 'google'" :options="options"/>
  <l-marker v-else-if="mapProviderConfig.provider === 'leaflet'" :options="options"/>
</template>

<script lang="ts">
import { useMapProviderConfig } from '../composables/useMapProviderConfig.ts'
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'NuxtMarker',
  components: {
    GMarker: defineAsyncComponent(() => import('./providers/google/GMarker.vue')),
    LMarker: defineAsyncComponent(() => import('./providers/leaflet/LMarker.vue'))
  },
  props: {
    // TODO: add types for options https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
    options: {
      type: Object,
      default: () => ({})
    },
  },
  setup() {
    const mapProviderConfig = useMapProviderConfig()

    return {
      mapProviderConfig
    }
  }
})
</script>

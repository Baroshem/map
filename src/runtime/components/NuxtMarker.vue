<template>
  <g-marker v-if="mapProviderConfig.provider === 'google'" :options="options" :popup="popup"/>
  <l-marker v-else-if="mapProviderConfig.provider === 'leaflet'" :options="options" :popup="popup"/>
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
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
        zoom: 15,
      })
    },
    popup: {
      type: String,
      default: ''
    }
  },
  setup() {
    const mapProviderConfig = useMapProviderConfig()

    return {
      mapProviderConfig
    }
  }
})
</script>

<template>
  <g-map
    v-if="provider['google']"
    :options="options"
    :apiKey="provider['google'].apiKey"
  >
    <slot />
  </g-map>
  <l-map
    v-else-if="provider['leaflet']"
    :options="options"
  >
    <slot />
  </l-map>
</template>

<script lang="ts">

import { useMapProviderConfig } from '../composables/useMapProviderConfig.ts'
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: 'NuxtMap',
  components: {
    GMap: defineAsyncComponent(() => import('./providers/google/GMap.vue')),
    LMap: defineAsyncComponent(() => import('./providers/leaflet/LMap.vue'))
  },
  props: {
    // TODO: Add better types here
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
        zoom: 15
      })
    },
  },
  setup() {
    const provider = useMapProviderConfig()

    return {
      provider
    }
  }
})
</script>

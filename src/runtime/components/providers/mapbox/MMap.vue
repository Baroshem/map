<template>
  <mapbox-map
    :center="[options.center.lat, options.center.lng]"
    :access-token="apiKey"
  >
    <slot/>
  </mapbox-map>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MMap',
  props: {
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
        zoom: 15,
        attribution: ''
      })
    },
    apiKey: {
      type: String,
      default: ''
    }
  },
})
</script>


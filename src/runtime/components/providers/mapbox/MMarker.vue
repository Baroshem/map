<template>
  <mapbox-marker
    :lngLat="[options.position.lng, options.position.lat]"
  >
    <mapbox-popup v-if="popup">
      <div v-html="popup"></div>
    </mapbox-popup>
  </mapbox-marker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MMarker',
  props: {
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
      })
    },
    popup: {
      type: String,
      default: ''
    }
  },
})
</script>

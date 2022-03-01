<template>
  <leaflet-marker :lat-lng="[options.position.lat, options.position.lng]"></leaflet-marker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LMarker as LeafletMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default defineComponent({
  name: 'LMarker',
  components: {
    LeafletMarker
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
        zoom: 15
      })
    },
  },
})
</script>

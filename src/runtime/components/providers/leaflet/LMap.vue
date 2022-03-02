<template>
  <leaflet-map
    v-model="options.zoom"
    v-model:zoom="options.zoom"
    :center="[options.center.lat, options.center.lng]"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      :attribution="options.attribution"
    ></l-tile-layer>
    <slot/>
  </leaflet-map>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { LMap as LeafletMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default defineComponent({
  name: 'LMap',
  components: {
    LeafletMap,
    LTileLayer
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
        zoom: 15,
        attribution: ''
      })
    },
  },
})
</script>


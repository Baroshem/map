<template>
  <leaflet-marker
    :lat-lng="[options.position.lat, options.position.lng]"
  >
    <l-popup v-if="popup">
      <div v-html="popup"></div>
    </l-popup>
  </leaflet-marker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LMarker as LeafletMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default defineComponent({
  name: 'LMarker',
  components: {
    LeafletMarker,
    LPopup
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
        zoom: 15
      })
    },
    popup: {
      type: String,
      default: ''
    }
  },
})
</script>

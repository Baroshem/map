<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue'
import { useNuxtApp } from "#app";

export default defineComponent({
  name: 'LMarker',
  props: {
    // TODO: add types for options https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
    options: {
      type: Object,
      default: () => ({})
    },
  },
  setup() {
    const { $leaflet, $mymap } = useNuxtApp()

    if ($leaflet) {
      $leaflet.marker([40.689247, -74.044502]).addTo($mymap).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup()
    }
  }
})
</script>

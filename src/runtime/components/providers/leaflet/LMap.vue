<template>
  <div id="mapid">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useNuxtApp } from "#app";
import { useLeaflet } from '../../../composables/useLeaflet.ts'

export default defineComponent({
  name: 'LMap',
  props: {
    // TODO: add types for options https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
        zoom: 15
      })
    },
  },
  setup({ options }) {
    let mymap;
    let leaflet;
    onMounted(async () => {
      const { leaflet, map, init } = useLeaflet()

      await init(options)

      leaflet.value.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.value);
    })
  }
})
</script>


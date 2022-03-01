<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLeaflet } from '../../../composables/useLeaflet.ts'

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
    const { leaflet, map, init } = useLeaflet()

    leaflet.value?.marker([40.689247, -74.044502]).addTo(map.value).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup()
  }
})
</script>

<template>
  <google-marker :options="options"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Marker as GoogleMarker } from 'vue3-google-map'

export default defineComponent({
  name: 'GMarker',
  components: {
    GoogleMarker
  },
  props: {
    // TODO: add types for options https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
      })
    },
  },
})
</script>

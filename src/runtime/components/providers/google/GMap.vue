<template>
  <google-map
    :center="options.center"
    :zoom="options.zoom"
  >
    <slot/>
  </google-map>
</template>

<script lang="ts">
import { GoogleMap } from 'vue3-google-map'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GMap',
  components: {
    GoogleMap
  },
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
})
</script>


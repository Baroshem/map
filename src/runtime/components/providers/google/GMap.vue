<template>
  <google-map
    :center="options.center"
    :zoom="options.zoom"
  >
    <slot name="marker" />
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
      default: () => ({})
    },
  },
})
</script>


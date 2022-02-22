<template>
  <div
    :center="options.center"
    :zoom="options.zoom"
  >
    Leaflet Map
    <slot name="marker" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'LMap',
  props: {
    // TODO: add types for options https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
    options: {
      type: Object,
      default: () => ({})
    },
  },
})
</script>


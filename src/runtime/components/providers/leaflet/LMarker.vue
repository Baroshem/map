<template>
  <div>{{ leaflet }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LMarker',
  props: {
    // TODO: add types for options https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
    options: {
      type: Object,
      default: () => ({})
    },
  },
  leaflet: {
    type: Object,
    required: true,
  }
})
</script>

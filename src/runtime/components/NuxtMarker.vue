<template>
  <Marker :options="options" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Marker } from 'vue3-google-map'

export default defineComponent({
  name: 'NuxtMarker',
  components: { Marker },
  props: {
    // TODO: add types for options https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
    options: {
      type: Object,
      default: () => ({})
    }
  },
})
</script>

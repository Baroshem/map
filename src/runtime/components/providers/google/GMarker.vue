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
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
      })
    },
    popup: {
      type: String,
      default: ''
    }
  },
})
</script>

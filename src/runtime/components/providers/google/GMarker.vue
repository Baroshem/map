<template>
  <div>
    <google-marker :options="options">
        <info-window
          v-if="popup"
          :options="options"
        >
        <div v-html="popup"></div>
        </info-window>
    </google-marker>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Marker as GoogleMarker, InfoWindow } from 'vue3-google-map'

export default defineComponent({
  name: 'GMarker',
  components: {
    GoogleMarker,
    InfoWindow
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
  setup() {
    const open = ref(false);

    return {
      open
    }
  }
})
</script>

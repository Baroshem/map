<template>
  <div>
    <google-marker :options="options" @click="open = !open"/>
    <info-window v-if="popup && open" :options="{ ...options, content: popup }" @closeclick="open = !open">
      <!-- <div v-html="popup"></div> -->
    </info-window>
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

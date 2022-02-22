<template>
  <g-map
    v-if="provider == 'google'"
    :center="options.center"
    :zoom="options.zoom"
    >
    <slot name="marker" />
  </g-map>
  <div v-else-if="provider === 'leaflet'" id="mapid">
    <slot name="marker"/>
  </div>
</template>

<script lang="ts">

import { onMounted, defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: 'NuxtMap',
  components: {
    GMap: defineAsyncComponent(() => import('./providers/google/GMap.vue')),
    // LMap: defineAsyncComponent(() => import('./providers/leaflet/LMap.vue'))
  },
  props: {
    // TODO: Add better types here
    options: {
      type: Object,
      default: () => ({})
    },
    provider: {
      type: String,
      required: true,
    }
  },
  setup({ provider }) {
    if (provider === 'leaflet') {
      let mymap;
      let leaflet;
      onMounted(async () => {
        await import("leaflet/dist/leaflet.css");

        leaflet = await import('leaflet')
        mymap = leaflet.map("mapid").setView([42.5145, -83.0147], 9);

        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        leaflet.marker([51.5, -0.09]).addTo(mymap)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
      })
    }
  }
})
</script>

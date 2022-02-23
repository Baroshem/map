<template>
  <div id="mapid">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useNuxtApp } from "#app";

export default defineComponent({
  name: 'LMap',
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
  setup({ options }) {
    let mymap;
    let leaflet;
    onMounted(async () => {
      await import("leaflet/dist/leaflet.css");

      leaflet = await import('leaflet')
      mymap = leaflet.map("mapid").setView([options.center.lat, options.center.lng], options.zoom);

      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);
      const nuxtApp = useNuxtApp()
      nuxtApp.provide('leaflet', leaflet)
      nuxtApp.provide('mymap', mymap)

      // leaflet.marker([51.5, -0.09]).addTo(mymap)
      //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      //   .openPopup();
    })
  }
})
</script>


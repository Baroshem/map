<template>
  <div>
    <nuxt-map :options="{ center, zoom, attribution }" style="height: 500px">
      <nuxt-marker
        v-for="(marker, i) in markerPositions"
        :key="i"
        :options="{ position: marker }"
        popup="<a href='/''>Hi! I'm staying here on this location!</a>"
      />
    </nuxt-map>
  </div>
</template>

<script lang="ts" setup>
const markerPositions = [
  { lat: 40.689247, lng: -74.044502 },
  { lat: 40.689947, lng: -74.044502 },
  { lat: 40.684947, lng: -74.044502 }
]
const center = markerPositions[0]
const zoom = 15

// Leaflet only
const attribution = "<a href='https://blog.safecast.org/about/'>SafeCast</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>"
</script>

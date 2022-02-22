<template>
  <div>
    <nuxt-map provider="leaflet" :options="{ center, zoom }" style="height: 500px">
      <!-- <template #marker>
        <nuxt-marker provider="google" :options="{ position: center }"/>
      </template> -->
    </nuxt-map>
  </div>
</template>

<script lang="ts" setup>
const center = { lat: 40.689247, lng: -74.044502 }
const zoom = 15
</script>

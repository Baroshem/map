<template>
  <div>
    <nuxt-map provider="google" :options="{ center, zoom }" style="height: 500px; width: 100%">
      <nuxt-marker provider="google" :options="{ position: center }"/>
      <nuxt-marker provider="google" :options="{ position: middle }"/>
    </nuxt-map>
  </div>
</template>

<script lang="ts" setup>
const center = { lat: 40.689247, lng: -74.044502 }
const middle = { lat: 40.699247, lng: -74.044502 }
const zoom = 15
</script>

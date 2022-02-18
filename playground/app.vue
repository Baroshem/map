<template>
  <div>
    <nuxt-map :options="{ center }">
      <template #marker>
        <nuxt-marker :options="{ position: center }"/>
      </template>
    </nuxt-map>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 }

    return { center }
  },
}
</script>

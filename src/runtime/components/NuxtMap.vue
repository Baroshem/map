<template>
  <google-map
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
    >
    <slot name="marker" />
  </google-map>
</template>

<script lang="ts">
import { GoogleMap } from 'vue3-google-map'

export default{
  name: 'NuxtMap',
  components: { GoogleMap },
  props: {
    // TODO: Add better types here
    options: {
      type: Object,
      default: () => ({})
    }
  },
}
</script>

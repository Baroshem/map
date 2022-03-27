<template>
  <component
    :is="providerComponentName"
    :options="options"
    :apiKey="mapProviderConfig.options?.apiKey"
    ><slot
  /></component>
</template>

<script lang="ts">
import { useMapProviderConfig } from "../composables/useMapProviderConfig";
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "NuxtMap",
  components: {
    GMap: defineAsyncComponent(() => import("./providers/google/GMap.vue")),
    LMap: defineAsyncComponent(() => import("./providers/leaflet/LMap.vue")),
    MMap: defineAsyncComponent(() => import("./providers/mapbox/MMap.vue")),
  },
  props: {
    // TODO: Add better types here
    theme: "aubergine",
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
        zoom: 15,
      }),
    },
  },
  setup() {
    const mapProviderConfig = useMapProviderConfig();
    const providerComponentName = computed(() => {
      if (mapProviderConfig.provider === "google") {
        return "GMap";
      } else if (mapProviderConfig.provider === "leaflet") {
        return "LMap";
      } else if (mapProviderConfig.provider === "mapbox") {
        return "MMap";
      }
      // TODO: add more providers here
    });

    return {
      providerComponentName,
      mapProviderConfig,
    };
  },
});
</script>

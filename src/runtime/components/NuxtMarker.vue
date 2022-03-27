<template>
  <component
    :is="providerComponentName"
    :options="options"
    :popup="popup"
  ></component>
</template>

<script lang="ts">
import { useMapProviderConfig } from "../composables/useMapProviderConfig";
import { defineComponent, defineAsyncComponent, computed } from "vue";

export default defineComponent({
  name: "NuxtMarker",
  components: {
    GMarker: defineAsyncComponent(
      () => import("./providers/google/GMarker.vue")
    ),
    LMarker: defineAsyncComponent(
      () => import("./providers/leaflet/LMarker.vue")
    ),
    MMarker: defineAsyncComponent(
      () => import("./providers/mapbox/MMarker.vue")
    ),
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        center: { lat: 40.689247, lng: -74.044502 },
      }),
    },
    popup: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { provider } = useMapProviderConfig();
    const providerComponentName = computed(() => {
      if (provider === "google") {
        return "GMarker";
      } else if (provider === "leaflet") {
        return "LMarker";
      } else if (provider === "mapbox") {
        return "MMarker";
      }
      // TODO: add more providers here
    });

    return {
      providerComponentName,
    };
  },
});
</script>

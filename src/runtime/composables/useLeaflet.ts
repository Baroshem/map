import { useState } from '#app'
import { computed } from 'vue'

export const useLeaflet = () => {
  const leaflet = useState('leaflet', () => null)
  const map = useState('map', () => null)

  const init = async (options) => {
    await import("leaflet/dist/leaflet.css");
    leaflet.value = await import('leaflet')
    map.value = leaflet.value.map("mapid").setView([options.center.lat, options.center.lng], options.zoom);
  }

  return {
    leaflet: computed(() => leaflet.value),
    map: computed(() => map.value),
    init
  }
}

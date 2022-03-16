
import { defineNuxtPlugin, NuxtApp, useRuntimeConfig } from '#app'

export default defineNuxtPlugin(async (nuxtApp: NuxtApp) => {
  const { provider } = useRuntimeConfig().map

  if (provider === 'mapbox') {
    const Mapbox = await import('vue-mapbox-ts').then(lib => lib.default || lib)

    nuxtApp.vueApp.use(Mapbox)
  }
})

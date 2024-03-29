import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponent, addPlugin } from '@nuxt/kit'
import defu from 'defu'

type Provider = 'google' | 'leaflet' | 'mapbox';

export interface ModuleOptions {
  provider: Provider;
  options?: {
    apiKey?: string;
  };
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    map: ModuleOptions;
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtjs/map',
    configKey: 'map',
    compatibility: {
      nuxt: '3',
    }
  },
  setup (options, nuxt) {
    if (!options.provider) {
      throw new Error('`[@nuxtjs/map]` Missing map provider')
    }

    if (options.provider === 'google' && !options.options?.apiKey) {
      console.log('`[@nuxtjs/map]` Missing Google Maps API key. Running in development mode ...')
    }

    if (options.provider === 'mapbox' && !options.options?.apiKey) {
      console.log('`[@nuxtjs/map]` Missing Mapbox Access Token. Running in development mode ...')
    }

    nuxt.options.publicRuntimeConfig.map = defu(nuxt.options.publicRuntimeConfig.map, {
      ...options
    })

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })
    if (options.provider === 'leaflet') {
      addComponent({ name: 'LMap', filePath: resolve(runtimeDir, 'components/providers/leaflet/LMap.vue') })
      addComponent({ name: 'LMarker', filePath: resolve(runtimeDir, 'components/providers/leaflet/LMarker.vue') })
    } else if (options.provider === 'google') {
      addComponent({ name: 'GMap', filePath: resolve(runtimeDir, 'components/providers/google/GMap.vue') })
      addComponent({ name: 'GMarker', filePath: resolve(runtimeDir, 'components/providers/google/GMarker.vue') })
    } else if (options.provider === 'mapbox') {
      addPlugin(resolve(runtimeDir, 'plugin'))
      addComponent({ name: 'MMap', filePath: resolve(runtimeDir, 'components/providers/mapbox/MMap.vue') })
      addComponent({ name: 'MMarker', filePath: resolve(runtimeDir, 'components/providers/mapbox/MMarker.vue') })
    }
    addComponent({ name: 'NuxtMap', filePath: resolve(runtimeDir, 'components/NuxtMap.vue') })
    addComponent({ name: 'NuxtMarker', filePath: resolve(runtimeDir, 'components/NuxtMarker.vue') })

    console.log('`[@nuxtjs/map]` Module loaded correctly 🚀')
  }
})

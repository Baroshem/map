import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponent } from '@nuxt/kit'
import defu from 'defu'

type Provider = 'google' | 'leaflet';

// type ModuleOptions = {
//   [key in Provider]?: {
//     apiKey?: string;
//     [key: string]: any;
//   };
// };

type ModuleOptions = {
  provider: Provider;
  options?: {
    apiKey?: string;
  };
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    map: ModuleOptions;
  }
  interface NuxtConfig {
    map: ModuleOptions;
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtjs/map',
    configKey: 'map'
  },
  setup (options, nuxt) {
    if (!options.provider) {
      throw new Error('`[@nuxtjs/map]` Missing map provider')
    }

    if (options.provider === 'google' && !options.options?.apiKey) {
      console.log('`[@nuxtjs/map]` Missing Google Maps API key. Running in development mode ...')
    }

    nuxt.options.publicRuntimeConfig.map = defu(nuxt.options.publicRuntimeConfig.map, {
      ...options
    })

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })
    addComponent({ name: 'NuxtMap', filePath: resolve(runtimeDir, 'components/NuxtMap.vue') })
    addComponent({ name: 'NuxtMarker', filePath: resolve(runtimeDir, 'components/NuxtMarker.vue') })
  }
})

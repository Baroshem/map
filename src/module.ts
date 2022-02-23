import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addComponent } from '@nuxt/kit'
import defu from 'defu'

type Provider = 'google' | 'leaflet';

type ModuleOptions = {
  [key in Provider]?: {
    apiKey?: string;
    [key: string]: any;
  };
};

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
  defaults: {},
  setup (options, nuxt) {
    if (options.google && !options.google.apiKey) {
      console.log('`[@nuxtjs/map]` Missing Google Maps API key. Running in development mode ...')
    }

    nuxt.options.publicRuntimeConfig.map = defu(nuxt.options.publicRuntimeConfig.map, {
      provider: options
    })


    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))

    // nuxt.hook('autoImports:dirs', (dirs) => {
    //   dirs.push(resolve(runtimeDir, 'composables'))
    // })
    addComponent({ name: 'NuxtMap', filePath: resolve(runtimeDir, 'components/NuxtMap.vue') })
    addComponent({ name: 'NuxtMarker', filePath: resolve(runtimeDir, 'components/NuxtMarker.vue') })
  }
})

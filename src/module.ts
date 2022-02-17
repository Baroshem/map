import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import defu from 'defu'

interface ModuleBaseOptions {
  // TBD
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    map: ModuleBaseOptions
  }
}

export interface ModuleOptions extends ModuleBaseOptions {
  // TBD
};

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtjs/map',
    configKey: 'map'
  },
  defaults: {},
  setup (options, nuxt) {
    // if (!options) {
    //   throw new Error('Missing `options`')
    // }

    nuxt.options.publicRuntimeConfig.map = defu(nuxt.options.publicRuntimeConfig.map, {
      // TBD
    })


    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))

    // nuxt.hook('autoImports:dirs', (dirs) => {
    //   dirs.push(resolve(runtimeDir, 'composables'))
    // })
  }
})

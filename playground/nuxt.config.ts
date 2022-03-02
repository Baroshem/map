import { defineNuxtConfig } from 'nuxt3'
import MapModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    MapModule
  ],
  map: {
    provider: 'leaflet'
  }
})

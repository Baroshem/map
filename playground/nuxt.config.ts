import { defineNuxtConfig } from 'nuxt3'
import MapModule from '..'

export default defineNuxtConfig({
  modules: [
    MapModule
  ],
  map: {
    provider: 'google',
    // options: {
    //   apiKey: 'pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg'
    // }
  }
})

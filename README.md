[![@nuxtjs/map](https://map.nuxtjs.org/preview.png)](https://map.nuxtjs.org)

# @nuxtjs/map

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Map module for [Nuxt](https://v3.nuxtjs.org)

- [✨ &nbsp;Release Notes](https://github.com/nuxt-community/map-module/releases)
- [📖 &nbsp;Read the documentation](https://map.nuxtjs.org)

## Features

- Nuxt 3 ready
- Easy integration with Google Maps & Leaflet
- Use only two components `nuxt-map` and `nuxt-marker` no matter what map provider you choose
- [Coming soon] More map providers and components
- TypeScript support

[📖 &nbsp;Read the documentation](https://map.nuxtjs.org)

## Setup

```sh
yarn add @nuxtjs/map # yarn
npm i @nuxtjs/map # npm
```

## Basic usage

Firstly, you need to add `@nuxtjs/map` to your Nuxt config.

```javascript
// nuxt.config.js

{
    buildModules: [
        "@nuxtjs/map",
    ],
    map: {
      provider: '<YOUR_MAP_PROVIDER>' // google | leaflet
    }
}
```

Then you can start using `@nuxtjs/map` in your app!

```vue
<template>
  <div>
    <nuxt-map :options="{ center, zoom }" style="height: 500px">
      <nuxt-marker
        v-for="(marker, i) in markerPositions"
        :key="i"
        :options="{ position: marker }"
      />
    </nuxt-map>
  </div>
</template>

<script lang="ts" setup>
const markerPositions = [
  { lat: 40.689247, lng: -74.044502 },
  { lat: 40.689947, lng: -74.044502 },
  { lat: 40.684947, lng: -74.044502 }
]
const center = markerPositions[0]
const zoom = 15
</script>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/map/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/map
[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/map.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/map
[github-actions-ci-src]: https://github.com/nuxt-modules/map-module/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/map-module/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/map-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/map-module
[license-src]: https://img.shields.io/npm/l/@nuxtjs/map.svg
[license-href]: https://npmjs.com/package/@nuxtjs/map

<template lang="pug">
  header
    nav
      .tw-mr-6.tw-flex-grow
        nuxt-link.tw-text-3xl(to="/") {{ siteTitle }}
      .tw-flex
        .tw-mr-6
          nuxt-link(to="/") Posts
        .tw-mr-6
          nuxt-link(to="/") Categories
        .tw-mr-6
          nuxt-link(to="/about") About
</template>

<script>
import config from '@/config'

export default {
  data() {
    return {
      siteTitle: config.siteTitle,
    }
  }
}
</script>

<style lang="sass">
nav
  @apply tw-py-3 tw-flex tw-items-center tw-justify-between
</style>
-

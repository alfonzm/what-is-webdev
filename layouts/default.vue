<template lang="pug">
  .wrapper
    the-header
    nuxt
    the-footer
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="sass">

body
  @apply text-black

.wrapper
  @apply tw-mx-auto tw-pb-3 tw-px-4
  width: 900px

  @media(max-width: 768px)
    width: 100%

a
  &:hover
    @apply tw-underline
</style>

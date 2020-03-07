<template lang="pug">
  article.post
    img.post__cover(v-if="cover" :src="cover")
    img.post__image(v-else-if="image" :src="image")
    .post__meta.tw-mb-10
      h2.post__title {{ title }}
      span.post__timestamp Posted on {{ date }}
    .post__body(v-html="body")
    .post__author
      | — {{ author.name }} {{ author.emoji }}
</template>

<script>

import config from '@/config'
import moment from 'moment'

export default {
  head() {
    return {
      title: `${this.title} – ${this.titleSuffix}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.excerpt || this.title}` }
      ],
    }
  },
  async asyncData({ params, payload }) {
    const { attributes, html, vue } = await require(`~/assets/posts/${params.slug}.md`)
    const { title, cover, image, date, author } = attributes

    return {
      title,
      cover,
      image,
      date: moment(date).format('MMM DD, YYYY'),
      body: html,
      author: config.authors[author],
      titleSuffix: config.titleSuffix,
    }
  },
}
</script>

<style lang="sass">

.post
  @apply tw-mb-24

  &__cover
    @apply tw-shadow-md tw-mb-2
    min-width: 100vw
    position: relative
    left: calc(-50vw + 50%)

  &__title
    @apply tw-mb-2 tw-text-6xl tw-font-bold tw-leading-tight tw-tracking-tight

  &__image
    @apply tw-mt-12

  &__meta
    @apply tw-mt-10

  &__timestamp
    @apply tw-text-xl tw-text-gray-400

  &__author
    @apply tw-text-lg tw-leading-8

  &__body
    @apply tw-text-lg tw-leading-7

    h1, h2, h3, h4, h5, h6
      @apply tw-mt-12 tw-mb-4 tw-font-bold tw-leading-tight

    h3, h4, h5, h6
      @apply tw-mt-10

    h2
      @apply tw-text-3xl

    h3
      @apply tw-text-xl

    h4
      @apply tw-text-lg

    h5, h6
      @apply tw-text-base

    ul, ol
      @apply tw-ml-6

    ul
      @apply tw-list-disc

    ol
      @apply tw-list-decimal

    p, pre, ul, ol
      @apply tw-mb-4

    a
      @apply text-primary

    strong
      @apply font-bold

    code
      @apply tw-text-sm

    // inline code
    p, li
      code
        @apply tw-bg-gray-200 tw-px-2 tw-py-1 tw-rounded

    // code block
    pre
      overflow: scroll
      @apply tw-bg-gray-900 tw-p-4 tw-text-gray-200 tw-rounded-lg tw-leading-6

      > code
        background: none
        padding: none

    // images
    img
      @apply tw-mb-6 tw-mx-auto tw-shadow-md tw-rounded-lg

    figure
      img
        @apply tw-mb-1

      em img
        min-width: calc(100% + 100px)
        margin: 0 -50px

      figcaption
        @apply tw-text-base tw-text-gray-500 tw-text-center tw-mb-5


</style>

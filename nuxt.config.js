import hljs from 'highlight.js'
import md from 'markdown-it'
import config from './config'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: config.siteTitle || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'tomato',
    throttle: 0,
  },
  /*
  ** Global CSS
  */
  css: [
     { src: '@assets/css/fonts.css' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          options: {
            markdownIt: {
              html: true,
              linkify: true,
              highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return hljs.highlight(lang, str).value;
                  } catch (__) {}
                }

                return ''; // use external default escaping
              }
            }
          },
        }
      )
    }
  },
  generate: {
    routes: async () => {
      const fs = require('fs');
      const path = require('path');
      return await fs.readdirSync('./assets/posts').map(file => {
        const filename = path.parse(file).name
        return `/blog/${filename}`
      })
    },
  },
}

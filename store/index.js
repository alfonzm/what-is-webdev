import _ from 'lodash'
import moment from 'moment'

export const state = () => ({
  blogPosts: [],
});

export const getters = {
  blogPosts: state => {
    return _.orderBy(state.blogPosts, blogPost => moment(blogPost.attributes.date), ['desc'])
  }
}

export const mutations = {
  SET_BLOG_POSTS(state, list) {
    state.blogPosts = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let filenames = await require.context('~/assets/posts/', false, /\.md$/);

    const blogPosts = await Promise.all(filenames.keys().map(async filePath => {
      const fileName = filePath.slice(2)
      const blogPost = await require(`~/assets/posts/${fileName}`)

      const slug = fileName.slice(0, -1 * '.md'.length)
      blogPost.slug = slug
      return blogPost
    }))

    commit('SET_BLOG_POSTS', blogPosts)
  },
};

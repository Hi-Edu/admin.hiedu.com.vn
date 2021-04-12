export const state = () => ({
  user: null,
})

export const getters = {
  User: state => state.user,
  IsLoggedIn: state => !!state.user,
}

export const mutations = {
  User(state, user) {
    state.user = user || null
  },
}

export const actions = {
  Login(_, { email, password }) {
    const options = {
      method: 'POST',
      url: `/v1/auth/login`,
      data: {
        email,
        password
      }
    }

    return this.$axios(options)
  },
  async Logout({ commit }) {
    try {
      await this.$axios.delete(`/v1/auth/logout`)
      commit('User', null)

      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async Me({ commit }) {
    try {
      const { user } = await this.$axios.get(`/v1/auth/me`)
      commit('User', user)

      return Promise.resolve(user)
    } catch (err) {
      return Promise.reject(err)
    }
  },
}
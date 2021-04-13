export const state = () => ({
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  Create(_, data) {
    const options = {
      method: 'POST',
      url: `/v1/images`,
      data
    }

    return this.$axios(options)
  },
}
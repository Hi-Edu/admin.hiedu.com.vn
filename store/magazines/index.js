export const state = () => ({
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  Create(_) {
    const options = {
      method: 'POST',
      url: `/v0/magazines`,
    }

    return this.$axios(options)
  },
  Fetch(_) {
    const options = {
      method: 'GET',
      url: `/v0/magazines`,
    }

    return this.$axios(options)
  },
  FetchByUuid(_, uuid) {
    const options = {
      method: 'GET',
      url: `/v0/magazines/${uuid}`,
    }

    return this.$axios(options)
  },
  UpdateByUuid(_, { uuid, data }) {
    const options = {
      method: 'PUT',
      url: `/v0/magazines/${uuid}`,
      data
    }

    return this.$axios(options)
  },
  DeleteByUuid(_, uuid) {
    const options = {
      method: 'DELETE',
      url: `/v0/magazines/${uuid}`,
    }

    return this.$axios(options)
  },
}
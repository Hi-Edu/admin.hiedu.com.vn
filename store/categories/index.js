export const state = () => ({
  ages: [],
  cities: [],
  countries: [],
  subjects: [],
})

export const mutations = {
  Ages(state, data) {
    state.ages = data
  },
  Cities(state, data) {
    state.cities = data
  },
  Countries(state, data) {
    state.countries = data
  },
  Subjects(state, data) {
    state.subjects = data
  },
}

export const actions = {
  async Fetch({ commit }) {
    const { ages, cities, countries, subjects } = await this.$axios({
      method: 'GET',
      url: `/v1/categories`
    })

    commit('Ages', ages.rows)
    commit('Cities', cities.rows)
    commit('Countries', countries.rows)
    commit('Subjects', subjects.rows)
  }
}
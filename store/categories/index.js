const state = () => ({
  ages: [],
  countries: [],
  subjects: [],
  cities: []
})

const actions = {
  async FetchCategories({ state }) {
    const {  } = await this.$axios({
      method: 'GET',
      url: `/v1/categories`
    })

    // state.ages
    // state.countries
    // state.subjects
    // state.cities
  }
}
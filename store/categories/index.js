const state = () => ({
  ages: [],
  countries: [],
  subjects: [],
  cities: []
})

const actions = {
  async FetchCategories() {
    const {  } = await this.$axios({
      method: 'GET',
      url: `/v1/categories`
    })
  }
}
export default async ({ store }) => {
  try {
    await store.dispatch('categories/Fetch')
  } catch (err) {
  }
}
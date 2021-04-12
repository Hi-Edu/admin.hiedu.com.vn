export default async ({ route, store, redirect }) => {
  try {
    const user = await store.dispatch('auth/Me')

    if (!user) {
      if (route.name !== 'login') {
        redirect('/login')  
      }
    }
    else {
      if (route.name === 'login') {
        redirect('/')  
      }
    }

  } catch (err) {
    redirect('/login')
  }
}
export default function ({ $log, $axios, redirect, isDev }) {
  $axios.onRequest(config => {
    $log('Making request to ' + config.url)
  })

  $axios.onResponse(res => {
    // if (isDev) {
    //   console.log(res.data.data)
    // }

    return res.data.data
  })

  $axios.onError(err => {
    // const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   redirect('/400')
    // }

    return err
  })
}
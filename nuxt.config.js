const IS_PROD = process.env.NODE_ENV === 'production'

export default {
  target: 'static',
  ssr: false,
  server: { port: 3002 },
  head: {
    title: "Admin",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'theme-color', content: '#fff' }
    ],
    script: [
      
    ],
    link: [
      // { rel: 'icon', href: '/favicon.svg' },
      // { rel: 'mask-icon', href: '/favicon.svg', color: '#000' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
    ]
  },
  loading: {
    color: '#2972b9',
    height: '3px'
  },
  env: process.env,
  router: {
    middleware: ['me']
  },
  plugins: [
    { src: '~/plugins/logger' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/element-ui' },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dayjs'
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  components: true,
  axios: {
    baseURL: IS_PROD ? `https://api.hiedu.com.vn` : `http://localhost:3000`,
    credentials: true,
    debug: true
  }
}
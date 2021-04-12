export default {
  target: 'static',
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
  buildModules: ['@nuxtjs/tailwindcss'],
  
}
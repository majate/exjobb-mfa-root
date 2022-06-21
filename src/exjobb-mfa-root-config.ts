import { registerApplication, start } from 'single-spa'

const menuItems = [
  { name: 'Form', path: '/form' },
  { name: 'Page 2', path: '/p2' },
]

// registerApplication({
//   name: '@single-spa/welcome',
//   app: () =>
//     System.import(
//       'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
//     ),
//   activeWhen: location => location.pathname === '/',
// })

registerApplication({
  name: '@exjobb-mfa/header',
  app: () => System.import('@exjobb-mfa/header'),
  activeWhen: ['/'],
  customProps: {
    title: 'EXJOBB',
    titlePath: '/',
    menuItems,
  },
})

registerApplication({
  name: '@exjobb-mfa/form',
  app: () => System.import('@exjobb-mfa/form'),
  activeWhen: ['/form'],
})

start({
  urlRerouteOnly: true,
})


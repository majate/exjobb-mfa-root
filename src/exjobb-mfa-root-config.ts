import { registerApplication, start } from 'single-spa'

const menuItems = [
  { name: 'Form', path: '/form' },
  { name: 'Feed', path: '/feed' },
]

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
  name: '@exjobb-mfa/home',
  app: () => System.import('@exjobb-mfa/home'),
  activeWhen: location => location.pathname === '/',
})

registerApplication({
  name: '@exjobb-mfa/form',
  app: () => System.import('@exjobb-mfa/form'),
  activeWhen: ['/form'],
})

registerApplication({
  name: '@exjobb-mfa/feed',
  app: () => System.import('@exjobb-mfa/feed'),
  activeWhen: ['/feed'],
})

start({
  urlRerouteOnly: true,
})


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
    domElement: document.getElementById('header'),
  },
})

registerApplication({
  name: '@exjobb-mfa/home',
  app: () => System.import('@exjobb-mfa/home'),
  activeWhen: location => location.pathname === '/',
  customProps: { domElement: document.getElementById('content') },
})

registerApplication({
  name: '@exjobb-mfa/form',
  app: () => System.import('@exjobb-mfa/form'),
  activeWhen: ['/form'],
  customProps: { domElement: document.getElementById('content') },
})

registerApplication({
  name: '@exjobb-mfa/feed',
  app: () => System.import('@exjobb-mfa/feed'),
  activeWhen: ['/feed'],
  customProps: { domElement: document.getElementById('content') },
})

start({
  urlRerouteOnly: true,
})


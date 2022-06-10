import { registerApplication, start } from 'single-spa'

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: location => location.pathname === '/',
})

registerApplication({
  name: '@exjobb-mfa/form',
  app: () => System.import('@exjobb-mfa/form'),
  activeWhen: ['/form'],
})

start({
  urlRerouteOnly: true,
})


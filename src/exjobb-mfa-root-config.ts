import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@exjobb-mfa/navbar",
//   app: () => System.import("@exjobb-mfa/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});

# Exjobb MFA - Root config
This is the root configuration for a [single-spa](https://single-spa.js.org/) micro frontend application developed for a degree project at KTH.

Each micro frontends used by this application has its own repo (this repo only contains the root configuration). If you want to run the entire application, you need to install/build/run all of the micro frontends, besides the root configuration.

The code for the micro frontends can be found here:
- [The header micro frontend](https://github.com/majate/exjobb-mfa-header)
- [The form micro frontend](https://github.com/majate/exjobb-mfa-form)

## Installation
1. Ensure that you have [Node](https://nodejs.org/en/) and npm installed on your system
    - The project was developed with the following versions, so try to use similar:
        - `Node v16.15.1`
        - `npm 8.12.1`
2. Clone this repo
3. Go into the repo and execute:
```
npm install
```

## Run in development mode
```
npm start
```
Runs the root configuration in the development mode at port 9000 with hot reload if you edit the code.
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The root configuration assumes that the other micro frontends are hosted at the ports defined in the import map in `src/index.ejs`.

## Build
```
npm run build
```
Builds the project and places the output in `dist/`.

## Run in production mode
1. Ensure that you have [docker](https://www.docker.com/) installed.
2. [Build](#build) the root configuration and the wanted micro frontends.
3. Execute:
```
npm run docker-compose
```

This will start simple Nginx web servers for each micro frontend and the root configuration in docker containers.

> **NOTE!** <br>
> The docker configuration assumes a specific file structure of the micro frontend repos. Update the `context` properties in `docker-compose.yml` to correctly represent the relative paths to the corresponding `Dockerfile` of each micro frontend.

## Execute GreenFrame scenarios
> **NOTE!**
> - You need a GreenFrame license and account to use GreenFrame
> - GreenFrame only supports MacOS and Linux (i.e., not Windows).

1. Install the GreenFrame CLI and export you token as described [here](https://docs.greenframe.io/).
2. [Start the application in docker](#run-in-production-mode)
2. Inside `greenframe/` execute `greenframe open` to debug the scenarios.
3. Inside `greenframe/` execute `greenframe analyze` to run the scenarios and measure energy consumption.


<details>
  <summary><b>GreenFrame cannot find a browser?</b></summary>

  > If GreenFrame cannot find a browser when running `greenframe open`:
  > - If you already have a browser at another location, you can try to find the GreenFrame CLI library at you computer (on mac the default location is `~/.local/lib/greenframe/`), and add the path to you browser executable in `src/services/detectExecutablePath.js`. The executable to Google Chrome on mach is probably: `'/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'`
  > - Install Chromium or Google Chrome and place at the locations specified in the error message.
</details>

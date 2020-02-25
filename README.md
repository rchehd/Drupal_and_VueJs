<p align="center">
  <img src="https://cdn.svgporn.com/logos/docker-icon.svg" width="300" height="150"  alt="VueJS Logo"/>
  <img src="https://cdn.svgporn.com/logos/vue.svg" width="300" height="150"  alt="Docker Logo"/>
</p>

### Dockerizing Drupal && VueJS
##

## Table of Contents

- [Installation](#installation)

## Installation

To spin up the whole application for the first time in dev mode:
<br/>
**Make sure to install the latest version of [Docker](https://www.docker.com/) and Python 3.5 or greater before continuing**
```sh
$ git clone https://github.com/nicer00ster/dockerize-drupal-vue.git
$ cd dockerize-drupal-vue
# Start the docker containers
$ docker-compose up -d
# Setup drupal site (plan on doing this through docker)
# Install VueJS and node dependencies
$ cd frontend/src
$ npm install
$ npm run dev
```

<p align="center">
  <img src="https://cdn.svgporn.com/logos/docker-icon.svg" width="200" height="100"  alt="VueJS Logo"/>
  <img src="https://cdn.svgporn.com/logos/vue.svg" width="200" height="100"  alt="Docker Logo"/>
  <img src="https://cdn.svgporn.com/logos/drupal.svg" width="200" height="100"  alt="Drupal Logo"/>
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
# 
# Install all the docker containers:
$ make install
#
# To destroy all containers and data associated:
$ make down
#
# To pause the containers:
$ make stop
#
# To bring the containers back up: 
$ make up
```

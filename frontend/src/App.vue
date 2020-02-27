<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul id="articles">
      <li v-for="article in articles" :key="article.id">
        {{ article.attributes.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data() {
      return {
        articles: null
      }
    },
    mounted() {
      const res = axios.get('http://drupal.docker.localhost/api/articles');
      res.then(res => (this.articles = res.data.data));
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

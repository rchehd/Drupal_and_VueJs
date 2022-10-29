<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Test msg="Hello from test"></Test>
    <ul id="articles">
      <li v-for="article in articles" :key="article.id">
        {{ article.attributes.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue';
  import Test from './components/Test.vue';
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
      Test
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
  @import './css/main.css';
</style>

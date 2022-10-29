<template>
  <div id="app">
    <div class="container">
      <Header :image_url="photo"></Header>
      <img alt="Vue logo" src="./assets/logo.png">
      <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <Test msg="Hello from test"></Test>
      <ul id="articles">
        <li v-for="article in articles" :key="article.id">
          {{ article.attributes.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue';
  import Header from "./components/Header";
  import Test from './components/Test.vue';
  import axios from 'axios';
  import image from './assets/logo.png'
  export default {
    name: 'App',
    image: image,
    components: {
      Header,
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
    computed: {
      photo() {
        return require('./assets/logo.png');
      }
    }
  }
</script>


<style>
  @import './css/main.css';
</style>

import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  mounted: () => {
    const res = axios.get('http://drupal.docker.localhost/api/articles');
    res.then(res => console.log(res.data.data));
  },
}).$mount('#app');

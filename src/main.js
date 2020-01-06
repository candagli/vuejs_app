import Vue from 'vue'
import App from './App.vue' //importing our vue main Component

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app'); // we are loading our app into an html component in our index.html in  this case the <div> component with the id "app"

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; 
import "./styles/styles.css"  
import PixelBoard from 'vue-pixel-board';

Vue.component('pixel-board', PixelBoard);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

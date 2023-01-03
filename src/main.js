import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import VueGoogleApi from "vue-google-api";

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBFHcSZoPKvTRAnwS-BPrUH2sl3IrlFEGY",
  clientId:
    "296117240787-asv9ba5nv4lp911t02mujgjnd3m9tn1k.apps.googleusercontent.com",
};

Vue.use(VueGoogleApi, config);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

const eventBus = new Vue();
export default eventBus;
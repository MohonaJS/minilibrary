import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.productionTip = false

const routes = [
  {path: '/books', component: BookList},
]
const router = new VueRouter({routes})


Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

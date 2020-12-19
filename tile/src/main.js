import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Scoreboard from './components/Scoreboard'

Vue.config.productionTip = false

const routes = [
    {path:'/scoreboard', component: Scoreboard}
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

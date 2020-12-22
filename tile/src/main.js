import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Scoreboard from './components/Scoreboard'
import Login from './components/Login'

Vue.config.productionTip = false

const routes = [
    {path:'/scoreboard', component: Scoreboard},
    {path:'/login', component: Login}
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Game from './components/Game'
import TileGame from './components/TileGame'
import Scoreboard from './components/Scoreboard'
import Login from './components/Login'

Vue.config.productionTip = false

const routes = [
    {path:'/game', component: Game},
    {path:'/play', component: TileGame},
    {path:'/scoreboard', component: Scoreboard},
    {path:'/login', component: Login},
    // {path:'/register', component: Register}
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

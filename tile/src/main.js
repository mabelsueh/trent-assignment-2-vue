import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import TileGame from './components/TileGame'
import Scoreboard from './components/Scoreboard'
import Login from './components/Login'
import Manage from './components/Manage'

Vue.config.productionTip = false

const routes = [
    {path:'/', component: TileGame},
    {path:'/scoreboard', component: Scoreboard},
    {path:'/login', component: Login},
    {path:'/Manage', component: Manage}
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

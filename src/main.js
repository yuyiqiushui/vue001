//入口文件
import $ from 'jquery'



import Vue from 'vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'


import VueResource from 'vue-resource'
Vue.use(VueResource)



import App from './App.vue'

import './lib/mui/css/mui.css'

import 'mint-ui/lib/style.css'
import './lib/mui/css/icons-extra.css'

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem);


var vm = new Vue({
  el: "#app",
  render: c => c(App),
  router,
})
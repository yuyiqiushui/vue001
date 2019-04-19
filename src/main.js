//入口文件
console.log('ok')
import $ from 'jquery'

/* import './css/index.css'
import './css/index.scss'
import './css/index.less' */

import Vue from 'vue'
import VueRouter from 'vue-router'
import {Header} from 'mint-ui'

import App from './App.vue'

import './lib/mui/css/mui.css'

import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)


var vm = new Vue({
  el:"#app",
  render: c => c(App),
})
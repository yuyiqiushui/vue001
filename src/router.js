import VueRouter from 'vue-router'

import HomeComponent from './components/tabbar/HomeComponent.vue'
import MemberComponent from './components/tabbar/MemberComponent.vue'
import ShopcarComponent from './components/tabbar/ShopcarComponent.vue'
import SearchComponent from './components/tabbar/SearchComponent.vue'

import NewsList from './components/news/NewsList.vue'
import GoodsList from './components/goods/GoodsList.vue'
import PhotoList from './components/photos/PhotoList.vue'
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeComponent },
    { path: '/member', component: MemberComponent },
    { path: '/shopcar', component: ShopcarComponent },
    { path: '/search', component: SearchComponent },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/goodslist', component: GoodsList }
  ],
  linkActiveClass: 'mui-active'
})
export default router
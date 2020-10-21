import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'
import Category from '../views/Category.vue'
import Error from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/HOME',
    name: 'Home',
    component:Home
  },
  {
    path:'/CATEGORY',
    name: 'Category',
    component:Category
  },
  {
    path:'/content/:id',
    name: 'Content',
    component:Content,
    props:true
  },

  {
    path:'/404',
    name:'error',
    component:Error
  },
  {
    path: '*',
    redirect:'/404'
  }

]

const router = new VueRouter({
  routes
})
export default router

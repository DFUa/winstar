import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ViewPost from './views/ViewPost.vue'
import EditPost from './views/EditPost.vue'
import AddPost from './views/AddPost.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/AddPost',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/ViewPost/:id',
      name: 'ViewPost',
      component: ViewPost
    },
    {
      path: '/EditPost/:id',
      name: 'EditPost',
      component: EditPost
    }
  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import NetworkIssue from '../views/NetworkIssue.vue'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'NetworkIssue',
      component: NetworkIssue
    },
    {
      path: '/about',
      name: 'about-view',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about-view" */ '../views/About.vue')
    },
    {
      path: '/discography',
      name: 'discography-view',
      // route level code-splitting
      // this generates a separate chunk (discography.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "discography-view" */ '../views/Discography.vue'
        )
    },
    {
      path: '/events',
      name: 'events-view',
      // route level code-splitting
      // this generates a separate chunk (events.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "events-view" */ '../views/Events.vue')
    },
    {
      path: '/',
      name: 'home-view',
      component: Home
    },
    {
      path: '/:catchAll(.*)', // will catch all navigation that doesn't match any of the routes above this entry in the array
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  // global route guard: start the progress bar when routing begins
  NProgress.start()
  next()
})

router.afterEach(() => {
  // global route guard: finish the progress bar when routing is about to end
  NProgress.done()
})

export default router

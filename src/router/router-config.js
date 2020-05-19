
import Home from "@/views/Home.vue";


const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: '首页', keepAlive: true, auth: false }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
      // 
      meta: { title: "关于我们", keepAlive: false, auth: false }
    },
    {
      path: "/search",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "search" */ "../views/search.vue"),
      // 
      meta: { title: "搜索产品", keepAlive: false, auth: false }
    },
    {
      path: "/car",
      name: "car",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "car" */ "../views/car.vue"),
      // 
      meta: { title: "购物车", keepAlive: false, auth: false }
    },
    {
      path: "/my",
      name: "my",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "my" */ "../views/my.vue"),
      // 
      meta: { title: "我的", keepAlive: false, auth: false }
    }
]

export default routes;
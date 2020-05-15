
import Home from "@/views/Home.vue";


const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: '首页', keepAlive: false, auth: false }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
      // 
      meta: { title: '关于我们', keepAlive: false, auth: false }
    }
]

export default routes;
import Vue from "vue";
import Router from "vue-router";
import routes from './router-config'

Vue.use(Router);

const router = new Router({
  routes
});

//根据需求可添加router.beforeEach等钩子...
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '默认标题'
  if (to.meta.auth) {
    next('/login')
  } else {
    next()
  }
})


export default router
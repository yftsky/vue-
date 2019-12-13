//向外暴露路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'



//声明使用vue插件
Vue.use(VueRouter)

export default  new VueRouter({
  //路由路径没有#
  mode : "history",
  routes
})

import MSite from '@/pages/MSite/msite.vue'
import Search from '@/pages/Search/Search.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Order from '@/pages/Order/order.vue'

export default [
  //所有路由的集合  routes
      {
        //路由路径
        path:'/msite',
        //注册路由
        component:MSite
      },
      {
        //路由路径
        path:'/search',
        //注册路由
        component:Search
      },
      {
        //路由路径
        path:'/profile',
        //注册路由
        component:Profile
      },
      {
        //路由路径
        path:'/order',
        //注册路由
        component:Order
      },
      {
        path:'/',
        redirect:'/msite'
      }
    ]



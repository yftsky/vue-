import Vue from 'vue'
import  'lib-flexible'


import App from './App.vue'
import  router from './router/index' 
import Header from './components/Header/Header.vue'

//全局注册
Vue.component('Header',Header)

new Vue({
  // components:{
  //   App
  // },
  // template:'<App/>'
  render: h => h(App),
  router //所有组件都可看到$router和$route   <route-link></route-link>和<route-view></route-view>
}).$mount('#app')

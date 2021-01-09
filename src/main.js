
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Characters from '@/components/Characters'
import Episodes from '@/components/Episodes'
import Home from '@/components/Home'


Vue.config.productionTip = false

Vue.use(VueRouter)
const  router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home,
      name:'home'
    },
    {
        path: '/characters',
        component: Characters,
        name:'Character'
    },
    {
        path: '/episodes',
        component: Episodes,
        name:'Episodes'
    }
  ]
}) 

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
import my from '@/components/Friends/my'
import mydynamic from '@/components/Friends/mydynamic'
import focus from '@/components/Friends/focus'
import addfriend from '@/components/lx_addfriend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "/",
      redirect :"/addfriend"
    },
    {
      path: '/addfriend',
      name: 'addfriend',
      component: addfriend
    },
    {
      path:"/my",
      name:"my",
      component:my,
      children:[
        {
        path:"/mydynamic",
        name:"mydynamic",
        component:mydynamic
      },{
        path:"/focus",
        name:"focus",
        component:focus
      }
    ]
     

    }
  ]
})

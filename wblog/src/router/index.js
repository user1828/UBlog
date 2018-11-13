import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
import my from '@/components/Friends/my'
import mydynamic from '@/components/Friends/mydynamic'
import focus from '@/components/Friends/focus'
import discuss from '@/components/Friends/discuss'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path : "/",
    //   redirect :"/home"
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path:"**",
    //   component:Home
    // }
    {
      path:"/my",
      name:"my",
      component:my,
      children:[
        {
        path:"/mydynamic",
        name:"mydynamic",
        component:mydynamic,
      },
      {
        path:"/focus",
        name:"focus",
        component:focus
      }
    ]
     

    },
    {
      path:"/discuss",
      name:"discuss",
      component:discuss
    }

  ]
})

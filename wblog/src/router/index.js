import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
import my from '@/components/Friends/my'
import mydynamic from '@/components/Friends/mydynamic'
import focus from '@/components/Friends/focus'


import lx_addfriend from '@/components/lx/lx_addfriend'
import lx_addtab from '@/components/lx/lx_addtab'
import lx_search from '@/components/lx/lx_search'
import lx_see from '@/components/lx/lx_see'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lx_addfriend',
      name: 'lx_addfriend',
      component: lx_addfriend
    },
    {
      path: '/lx_addtab',
      name: 'lx_addtab',
      component: lx_addtab
    },
    {
      path: '/lx_search',
      name: 'lx_search',
      component: lx_search
    },
    {
      path: '/lx_see',
      name: 'lx_see',
      component: lx_see
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

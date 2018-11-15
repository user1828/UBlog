import Vue from 'vue'
import Router from 'vue-router'
/* tp朋友圈 */
import my from '@/components/Friends/my'
import mydynamic from '@/components/Friends/mydynamic'
import focus from '@/components/Friends/focus'
import discuss from '@/components/Friends/discuss'
import someone from '@/components/Friends/someone'
/* lst发布组件 */
import Release from '@/components/mysetting/release'

/* wcy首页组件 */
import Home from '@/components/home/home'
import Actions from "@/components/actions/actions"
import Coiling from "@/components/coiling/coiling"
import More from "@/components/actions/more"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "/",
      redirect :"/home"
    },
    {

      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/release',
      name: 'release',
      component: Release
    },
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
    },
    
		{
			path:"/actions",
			name:"actions",
			component:Actions
		},
		{
			path:"/coiling",
			name:"coiling",
			component:Coiling
		},
		{
			path:"/more",
			name:"more",
			component:More
    },
    {
      path:"/someone",
      name:"someone",
      component:someone
    }
  ]
})

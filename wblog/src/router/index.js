import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
/* tp朋友圈 */
import my from '@/components/Friends/my'
import mydynamic from '@/components/Friends/mydynamic'
import focus from '@/components/Friends/focus'
import discuss from '@/components/Friends/discuss'
/* lst发布组件 */
import Release from '@/components/mysetting/release'
=======
import Home from '@/components/home/home'
import Actions from "@/components/actions/actions"
import Coiling from "@/components/coiling/coiling"
import More from "@/components/actions/more"
>>>>>>> wcy
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path : "/",
    //   redirect :"/release"
    // },
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
<<<<<<< HEAD
      path:"/discuss",
      name:"discuss",
      component:discuss
    }

=======
      path: '/home',
      name: 'home',
      component: Home
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
		}
>>>>>>> wcy
  ]
})

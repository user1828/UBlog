import Vue from 'vue'
import Router from 'vue-router'

/* tp朋友圈 */
import my from '@/components/Friends/my'
import mydynamic from '@/components/Friends/mydynamic'
import focus from '@/components/Friends/focus'
import discuss from '@/components/Friends/discuss'
/* lst发布组件 */
import Release from '@/components/mysetting/release'
import information from '@/components/mysetting/information'
import setting from '@/components/mysetting/setting'
import account from '@/components/mysetting/account'
import registerhome from '../components/register/registerhome.vue'
import message from '../components/register/message.vue'
import interest from '../components/register/interest.vue'
import login from '../components/login/login.vue'

/* wcy首页组件 */
import Home from '@/components/home/home'
import Actions from "@/components/actions/actions"
import Coiling from "@/components/coiling/coiling"
import More from "@/components/actions/more"


import lx_addfriend from '@/components/lx/lx_addfriend'
import lx_addtab from '@/components/lx/lx_addtab'
import lx_search from '@/components/lx/lx_search'
import lx_see from '@/components/lx/lx_see'


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
      component: Release,
    },
		{
			path: '/information',
			name: 'information',
			component: information,
		},
			
			{
			path: '/setting',
			name: 'setting',
			component: setting,
			
		},
		{
			path: '/account',
			name: 'account',
			component: account,
		},
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
			path:"/registerhome", 
			name:"registerhome",
			component:registerhome
		},
		{
			path:'/message',
			name:'message',
			component:message
		},
		{
			path:'/interest',
			name:'interest',
			component:interest
		},
		{
			path:"/login",
			name:"login",
			component:login
		}
		
  ]
})

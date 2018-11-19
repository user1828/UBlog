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
import data from "@/components/data"
/* wb */
import art from '@/components/events/art';
import exam from '@/components/events/exam';
import kepu from '@/components/events/kepu';
import Movie from '@/components/events/Movie';
import part from '@/components/events/part';
import fashiun from '@/components/events/fashiun';
import exercise from '@/components/events/exercise';
import seikatsu from '@/components/events/seikatsu';
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
          component:focus,
          meta:{keepAlive:true}
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
		},
    {
      path:"/someone",
      name:"someone",
      component:someone
    },
    {
      path:"/art",
      name:"art",
      component:art
    },
    {
      path:"/exam",
      name:"exam",
      component:exam
    },
    {
      path:"/kepu",
      name:"kepu",
      component:kepu
    },
    {
      path:"/Movie",
      name:"Movie",
      component:Movie
    },
    {
      path:"/part",
      name:"part",
      component:part
    },
    {
      path:"/fashiun",
      name:"fashiun",
      component:fashiun
    },
    {
      path:"/exercise",
      name:"exercise",
      component:exercise
    },
    {
      path:"/seikatsu",
      name:"seikatsu",
      component:seikatsu
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Actions from "@/components/actions/actions"
import Coiling from "@/components/coiling/coiling"
import More from "@/components/actions/more"
import data from "@/components/data"
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
		path:"/data",
		name:"data",
		component:data
	}
  ]
})

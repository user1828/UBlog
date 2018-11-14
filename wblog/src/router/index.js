import Vue from 'vue'
import Router from 'vue-router'
import registerhome from '../components/register/registerhome.vue'
import message from '../components/register/message.vue'
import interest from '../components/register/interest.vue'
import login from '../components/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "/",
      redirect :"/home"
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

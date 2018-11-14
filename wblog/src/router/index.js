import Vue from 'vue'
import Router from 'vue-router'
/* tp朋友圈 */
import my from '@/components/Friends/my'
import mydynamic from '@/components/Friends/mydynamic'
import focus from '@/components/Friends/focus'
import discuss from '@/components/Friends/discuss'
/* lst发布组件 */
import Release from '@/components/mysetting/release'
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
      path:"/discuss",
      name:"discuss",
      component:discuss
    }

  ]
})

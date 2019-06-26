import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'

Vue.use(Router)
import {getToken} from '@/utils/anth'

// 当进入/ 如果没有token 就去登录？


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/pages/index')
    },{
      path:'/login',
      name:'login',
      component:()=>import('@/pages/login')
    }
  ]
})
// 路由 to from  $router path /
let token = getToken();
const whiteList = ['/login','/signup','auth-redirect']
router.beforeEach((to,from,next)=>{ //在每一次跳转之前
  if(token){

  }else{
    if(whiteList.includes(to.path)){  //如果在白名单里面就不用登录
      // console.log(to.path)
      next();
    }else{
      next(`/login?redirect=${to.path}`)
    }
  }
})
export default router


import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import article from '@/components/article'
import user from '@/components/user'

Vue.use(Router)

let router = new Router({
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        //做路由切换才有
        console.log(to,'scrollBehavio-to');
        console.log(from,'scrollBehavio-from');
        console.log(savedPosition,'scrollBehavio-savedPosition');
        if(savedPosition){
          return savedPosition;
        }else{
          return {x:0,y:0};
        }
    },
    linkActiveClass:'act',
    mode:'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: home,
            meta:{
                // login:true
              index:0,
              title:'首页'
            }
        },
        {
            path: '/article',
            name: 'article',
            component: article,
            meta:{
                // login:true
                index:1,
                title:'文章'
            }
        },
        {
            path: '/user/:id?',
            name: 'user',
            component: user,
            beforeEnter: (to, from, next) => {
                console.log(123456789)
                next();
            },
            meta:{
                // login:true
                index:2,
                title:'用户'
            }
        },
        {
            path: '*',
            component:resolve=>{require(['@/components/404'],resolve)},
            meta:{
                // login:true
                index:3,
                title:'404'
            }
         },
    ]
})

/*router.beforeEach((to, from, next) => {
    /!*if(to.meta.login){
      next('/login');
    }else{
      next();
    }*!/
    console.log(to.meta.index);
    console.log(from.meta.index);
    next();
})*/

router.afterEach((to, from) => {
   document.title = to.meta.title?to.meta.title:'积云教育';
})

export default router;

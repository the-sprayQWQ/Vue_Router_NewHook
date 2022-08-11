import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                    {
                        path:'news',
                        component:News
                    },
                    {
                        path:'message',
                        component:Message,
                        children:[
                            {
                                name:'detail',
                                //params必须要这样占位
                                path:'detail/:id/:title',
                                component:Detail,

                                //props第一种写法，值为一个对象,该对象中所有key-value都会以props形式传给Detail组件
                                // props:{}

                                // props的第二种写法，值为一个布尔值,若布尔值为真，则会把该组件中的所有params值以props方式传给Detail组件 
                                // props:true

                                //props的第三种写法，值为一个函数，会把函数体的东西以props方式传给Detail组件
                                props($route){
                                    return {id:$route.params.id,title:$route.params.title}
                                }
                            }
                        ]
                    }
            ]
        },
    ]
})

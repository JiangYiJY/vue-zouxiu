import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/Home"
import Detail from "@/pages/Detail"
import Goods from "@/pages/Goods"
import ShopCar from "@/pages/ShopCar"
import Show from "@/pages/Show"
import More from "@/pages/More"
import Login from "@/pages/Login"
import Register from "@/pages/Register"

Vue.use(Router)

export default new Router({
  routes: [
    {path : "/",redirect : {name:"Home"}},
    {path: '/home',name: 'Home',component: Home},
    {path : "/detail",name  : "Detail",component : Detail},
    {path : "/goods",name  : "Goods",component : Goods},
    {path : "/shopCar",name  : "ShopCar",component : ShopCar},
    {path : "/show",name  : "Show",component : Show},
    {path : "/more",name  : "More",component : More},
    {path : "/login",name : "Login",component : Login},
    {path : "/register",name : "Register",component : Register}
  ]
})

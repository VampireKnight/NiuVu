import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Register from '@/pages/register/register'
import Index from '@/pages/index/index'
import Order from '@/components/Order'
import Voidrouter from '@/components/Voidrouter'

import Defind from '@/components/Index'
import CouList from '@/components/CourLis'
import AcaList from '@/components/AcadLis'
import DysList from '@/components/DysLis'
import Personal from '@/components/Personal'
import Setpage from '@/pages/set/Set'
import Setinf from '@/pages/set/Info'
import Setpswd from '@/pages/set/Pswd'
import Setaddr from '@/pages/set/Addr'

import Allcl from '@/pages/allClass.vue'
import Setdetail from '@/commonponents/Setdetail'

import TabDemo from '@/components/TabDemo'


import Acadmy from '@/components/Acadmy'


Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
		{
	      	path: '/login',
	      	name: '登陆',
	     	component:Login
	    },
	    {
	      	path: '/register',
	      	name: '注册',
	     	component:Register
	    },
	    {
	      	path: '/tabdemo',
	      	name: 'tab组件测试',
	     	component:TabDemo
	    },
	    {
	      	path: '/',
	      	name: '首页',
	     	component:Index,
	     	children:[
	     		{path:"/index/index",name:"首页",component:Defind,alias:'/index'},
	     		{path:"/index/courlis",name:"课程列表",component:CouList,alias:'/courlis'},
	     		{path:"/index/acadlis",name:"学院列表",component:AcaList,alias:'/acadlis'},
	     		{path:"/index/dyslis",name:"动态列表",component:DysList,alias:'/dyslis'},
	     		{path:"/index/personal",name:"个人中心",component:Personal,alias:'/personal'},
	     		{path:"/index/acadmy",name:"学院详情",component:Acadmy,alias:'/acadmy'}
	     	],
	     	redirect:"/index",
	    },
	    {
	      	path: '/order',
	      	name: '我的订单',
	     	component:Order
	    },
	    {
	      	path: '/',
	      	name: '首页',
	     	component:Index,
	    },
	    {
	      	path: '/setlist',
	      	component:Voidrouter,
	      	children:[
	      			{path:"/setlist/set",name:"设置",component:Setpage,alias:"/set"},
	      			{path:"/setlist/info",name:"个人资料",component:Setinf,alias:["/set/info",'/Setinf']},
	    			{path:"/setlist/pswd",name:"修改密码",component:Setpswd,alias:["/set/pswd",'/Setpswd']},
	    			{path:"/setlist/addr",name:"收货地址",component:Setaddr,alias:["/set/addr",'/Addr']},
	      	],
	      	redirect:"/set"
	    },
	    {
	      	path: '/allcl',
	      	name: '课程管理',
	     	component:Allcl,
	    },
	   /*	{path:"/set/info",name:"个人资料",component:Setinf,alias:'/Setinf'},
	    {path:"/set/pswd",name:"修改密码",component:Setpswd,alias:'/Setpswd'},
	    {path:"/set/addr",name:"收货地址",component:Setaddr,alias:'/Addr'},*/
/*	    { 
	    	path: '/set/:id', 
	    	component: Setdetail 
		}*/
/*	    {
	      	path: '/courlis',
	      	name: '课程列表',
	     	component:Index,
	     	redirect:"/index/courlis",
	    },
	    {
	      	path: '/acadlis',
	      	name: '学院列表',
	     	component:Index,
	     	redirect:"/index/acadlis",
	    },
	    {
	      	path: '/dyslis',
	      	name: '动态列表',
	     	component:Index,
	     	redirect:"/index/dyslis",
	    },
	    {
	      	path: '/personal',
	      	name: '个人中心',
	     	component:Index,
	     	redirect:"/index/personal",
	    }*/
	]
})

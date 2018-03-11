import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Index from '@/pages/index/index'
import Order from '@/components/Order'

import Defind from '@/components/Index'
import CouList from '@/components/CourLis'
import AcaList from '@/components/AcadLis'
import DysList from '@/components/DysLis'
import Personal from '@/components/Personal'

import TabDemo from '@/components/TabDemo'


import Acadmy from '@/components/Acadmy'


Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
		{
	      	path: '/login',
	      	name: '首页',
	     	component:Login
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

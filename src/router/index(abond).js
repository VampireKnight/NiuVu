import Vue from 'vue'
import Router from 'vue-router'
/*import Index from '@/components/Index'*/
import CouList from '@/components/CourLis'
import AcaList from '@/components/AcadLis'
import DysList from '@/components/DysLis'
import Personal from '@/components/Personal'
import Login from '@/pages/login/login'
import Index from '@/pages/index/index'

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
	      	path: '/index',
	      	name: '首页',
	     	component:Index,
	     	children:[
	     		{path:"/index/courlis",name:"课程列表",component:CouList},
	     		{path:"/index/acadlis",name:"学院列表",component:AcaList},
	     		{path:"/index/dyslis",name:"动态列表",component:DysList},
	     		{path:"/index/personal",name:"个人中心",component:Personal}
	     	]
	    },
	    {
	      	path: '/',
	      	name: '首页',
	     	component:Index,
	    },
	    {
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
	    }
	]
})

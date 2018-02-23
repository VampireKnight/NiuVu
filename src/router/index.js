import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CouList from '@/components/CourLis'
import AcaList from '@/components/AcadLis'
import DysList from '@/components/DysLis'
import Personal from '@/components/Personal'

Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
	    {
	      	path: '/',
	      	name: '首页',
	     	component:Personal
	    },
	    {
	      	path: '/courlis',
	      	name: '课程列表',
	     	component:CouList
	    },
	    {
	      	path: '/acadlis',
	      	name: '学院列表',
	     	component:AcaList
	    },
	    {
	      	path: '/dyslis',
	      	name: '动态列表',
	     	component:DysList
	    },
	    {
	      	path: '/personal',
	      	name: '个人中心',
	     	component:Personal
	    }
	]
		/*{
			path: '/',
			component: IndexPage
		},
		{
			path: '/orderList',
			component: OrderListPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		}*/
})

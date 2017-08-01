import Vue from 'vue'
import Router from 'vue-router'
//import Resource from 'vue-resource'
import index from '../components/index.vue'
import order from '../components/order.vue'
import login from '../components/login.vue'
import myMsg from '../components/myMsg.vue'
import search from '../components/search.vue'
import business from '../components/business.vue'


Vue.config.debug = true;

Vue.use(Router);
//Vue.use(Resource);



export default new Router ({
	//model:"history",
	routes:[
		{
			path:'/',
			redirect:'/index'
		},
		{
			path:'/index',
			component: index
		},
		{
			path:'/order',
			component: order
		},
		{
			path:'/login',
			component: login
		},
		{
			path:'/myMsg',
			component: myMsg
		},
		{
			path:'/search/:keyword',
			component: search
		},
		{
			path:'/business/:id',
			component: business
		}

	]
})

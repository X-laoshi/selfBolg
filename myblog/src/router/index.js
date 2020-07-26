import Vue from 'vue';
import Router from  'vue-router';
import Login from '../components/Login';
import regist from '../components/regist';
import changpsw from '../components/changpsw.vue';
Vue.use(Router);

export default new Router({			//路由配置
    routes:[
        {
            path:'/',
            name:'Login',
            component: Login
        },
        {
            path:'/regist',
            component: regist
        },
		{
			path:'/changpsw',
			component: changpsw
		}
    ]
})
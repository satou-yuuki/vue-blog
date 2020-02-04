import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import Connect from './views/Connect.vue';
import BlogHome from './components/BlogHome';
import BlogPost from './components/BlogPost';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {path: '/',component: Home},
        {path: '/portfolio' ,component: Portfolio},
        {path: '/connect' ,component: Connect},
        {path: '/blog/' ,component: BlogHome},
        {path: '/blog/:slug' ,component: BlogPost}
    ]
});
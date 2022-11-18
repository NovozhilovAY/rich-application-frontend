import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from "@/pages/login/LoginPage";
import MainPage from "@/pages/main/MainPage";
import RegistrationPage from "@/pages/registration/RegistrationPage";

const routes = [
    { path: '/',name:'MainPage' ,component: MainPage },
    { path: '/login',name:'LoginPage' ,component: LoginPage},
    { path: '/registration',name:'RegistrationPage' ,component: RegistrationPage},
    { path: '/:pathMatch(.*)',name:'Redirect', redirect: '/' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/registration'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
        return next('/login');
    }
    next();
});

export default router;

import * as Vue from 'vue';
import * as VueRouter from "vue-router";
import App from './App.vue';
import HomeView from "@/view/HomeView";
import Ayuda from "@/components/Ayuda";
import FormSuccessView from "@/view/FormSuccessView";
import FormErrorView from "@/view/FormErrorView";
//import NotFound from "@/components/NotFound";

const routes = [
    {path: '/home', name: "HomeRoute", component: HomeView},
    {path: '/ayuda', name: "Ayuda", component: Ayuda},
    {path: '/ayuda/success', name: "FormSuccess", component: FormSuccessView},
    {path: '/ayuda/error', name: "FormError", component: FormErrorView},
   // {path: '*', name: "NotFound", component: NotFound}
]


const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes,
})

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');



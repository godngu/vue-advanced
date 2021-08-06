import { createWebHistory, createRouter } from 'vue-router'
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import createListView from "@/views/CreateListView";

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        name: 'news',
        component: createListView('NewsView')
    },
    {
        path: '/ask',
        name: 'ask',
        component: createListView('AskView')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: createListView('JobsView')
    },
    {
        path: '/user/:id',
        name: 'user',
        component: UserView
    },
    {
        path: '/item/:id',
        name: 'item',
        component: ItemView
    },
]
export const router = createRouter({
    history: createWebHistory(),
    routes
});

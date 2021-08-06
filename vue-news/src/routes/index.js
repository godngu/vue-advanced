import { createWebHistory, createRouter } from 'vue-router'
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
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
        // component: createListView('NewsView')
        component: NewsView
    },
    {
        path: '/ask',
        name: 'ask',
        // component: createListView('AskView')
        component: AskView
    },
    {
        path: '/jobs',
        name: 'jobs',
        // component: createListView('JobsView')
        component: JobsView
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

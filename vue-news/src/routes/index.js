import { createWebHistory, createRouter } from 'vue-router'
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        name: 'News',
        component: NewsView
    },
    {
        path: '/ask',
        name: 'Ask',
        component: AskView
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: JobsView
    },
    {
        path: '/item',
        name: 'Item',
        component: ItemView
    },
    {
        path: '/user/:id',
        name: 'User',
        component: UserView
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
});

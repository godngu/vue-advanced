import { createWebHistory, createRouter } from 'vue-router'
import News from "@/views/NewsView";
import Ask from "@/views/AskView";
import Jobs from "@/views/JobsView";

const routes = [
    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/ask',
        name: 'Ask',
        component: Ask
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
});

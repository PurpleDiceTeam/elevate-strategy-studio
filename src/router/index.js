import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    // Add the catch-all route
/*     {
        path: '/:catchAll(.*)', // Matches any path
        name: 'catchAll',
        component: HomeView, // Or specify another component if desired
    } */
];

const router = createRouter({
    history: createWebHashHistory(), // Use hash mode instead of history mode
    base: '/gonzawordpress/', // Set the base property to the subdirectory where WordPress is installed
    routes,
});

export default router;

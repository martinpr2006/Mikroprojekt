import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Rating from "../pages/Rating.vue";
import Summary from "../pages/Summary.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", component: Home },
        { path: "/rating", component: Rating },
        { path: "/summary", component: Summary },
	],
});

export default router;
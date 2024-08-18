import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/404.vue";
import Home from "../views/Home.vue";
import Packages from "../views/Packages.vue";
import Projects from "../views/Projects.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/projects",
		name: "projects",
		component: Projects,
	},
	{
		path: "/packages",
		name: "packages",
		component: Packages,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ArticlePage from "@/views/ArticlePage.vue";
import ClassPage from "@/views/ClassPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/article",
    name: "ArticlePage",
    component: ArticlePage,
  },
  {
    path: "/class",
    name: "ClassPage",
    component: ClassPage,
  },
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

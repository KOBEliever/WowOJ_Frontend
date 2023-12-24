import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Problem",
    component: HomeView,
  },
  {
    path: "/Answer",
    name: "Answer",
    component: AboutView,
  },
];

import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AdminView from "../views/AdminView.vue";
import NoAuthView from "../views/NoAuthView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Problem",
    component: HomeView,
  },
  {
    path: "/Admin",
    name: "Admin only",
    component: AdminView,
    //权限控制
    meta: {
      access: "admin",
    },
  },
  {
    path: "/NoAuth",
    name: "NoAuth",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/Answer",
    name: "Answer",
    component: AboutView,
  },
];

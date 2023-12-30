import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AdminView from "../views/AdminView.vue";
import NoAuthView from "../views/NoAuthView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserLayout from "@/layout/UserLayout.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "User",
    component: UserLayout,
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/login",
        name: "UserLogin",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "UserRegister",
        component: UserRegisterView,
      },
    ],
  },
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

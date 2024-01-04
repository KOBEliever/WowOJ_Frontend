import { RouteRecordRaw } from "vue-router";
import AboutView from "../views/AboutView.vue";
import NoAuthView from "../views/NoAuthView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserLayout from "@/layout/UserLayout.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import QuestionView from "@/views/question/QuestionView.vue";
import ViewQuestionView from "@/views/question/ViewQuestionView.vue";

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
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: AddQuestionView,
    meta: {
      hideInMenu: true,
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/manage/question/",
    name: "管理题目",
    component: ManageQuestionView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/view/question/:id",
    name: "在线做题",
    component: ViewQuestionView,
    props: true,
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },

  {
    path: "/",
    name: "Problem",
    component: QuestionView,
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

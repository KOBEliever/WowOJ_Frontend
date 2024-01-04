import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";
import router from "@/router";
import store from "@/store";

router.beforeEach(async (to, from, next) => {
  console.log(store.state.user.loginUser);
  let loginUser = store.state.user.loginUser;
  //如果没有登陆,则自动登录
  if (!loginUser || !loginUser.userRole) {
    //用户登录后再执行代码
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果没有登陆,跳转到登录页
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === ACCESS_ENUM.NOT_LOGIN
    ) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    //如果登录但是没有权限,则跳转到无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next("/NoAuth");
      return;
    }
  }
  next();
});

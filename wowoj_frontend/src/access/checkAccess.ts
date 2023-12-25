import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要具有的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  //如果需要权限为未登录,均可访问
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果需要登录,则登录
  if (needAccess === ACCESS_ENUM.USER) {
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如果需要权限为管理员
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;

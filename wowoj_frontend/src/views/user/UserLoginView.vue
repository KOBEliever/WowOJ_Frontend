<template>
  <a-form
    style="max-width: 600px; margin: 0 auto"
    label-align="left"
    auto-label-width
    :model="form"
    @submit="handleSubmit"
  >
    <a-form-item field="userAccount" label="账号">
      <a-input v-model="form.userAccount" placeholder="请输入账户名..." />
    </a-form-item>
    <a-form-item field="userPassword" tooltip="密码不能少于8位" label="密码">
      <a-input-password
        v-model="form.userPassword"
        placeholder="请输入密码..."
      />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    message.success("登录成功" + JSON.stringify(res.data));
  } else {
    message.error("登录失败" + JSON.stringify(res.message));
  }
};
</script>

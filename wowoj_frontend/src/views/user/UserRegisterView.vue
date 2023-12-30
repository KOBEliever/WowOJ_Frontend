<template>
  <div id="userRegister">
    <a-card class="card" title="Welcome to Wow OJ" :bordered="false">
      <a-form
        class="form"
        label-align="left"
        auto-label-width
        hoverable
        :model="form"
        @submit="handleSubmit"
      >
        <a-form-item field="userAccount" label="账号">
          <a-input
            v-model="form.userAccount"
            placeholder="请输入账户名..."
            allow-clear
          >
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          field="userPassword"
          tooltip="密码不能少于8位"
          label="密码"
        >
          <a-input-password
            v-model="form.userPassword"
            placeholder="请输入密码..."
            allow-clear
          />
        </a-form-item>
        <a-form-item
          field="userPassword"
          tooltip="密码与第一次相同"
          label="重复"
        >
          <a-input-password
            v-model="form.userPassword"
            placeholder="请再次输入密码..."
            allow-clear
          />
        </a-form-item>
        <a-form-item>
          <a-button
            html-type="submit"
            shape="round"
            type="dashed"
            status="success"
            long
            >注册
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserRegisterRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";

const form = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as UserRegisterRequest);
const handleSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(form);
  if (res.code === 0) {
    message.success("注册成功" + JSON.stringify(res.data));
  } else {
    message.error("注册失败" + JSON.stringify(res.message));
  }
};
</script>
<style>
#userRegister .card {
  width: 500px;
  min-width: 300px;
  position: relative;
  margin: 150px 800px 8px;
  border-radius: 20px;
}

#userRegister .card:hover {
  transform: translateY(-4px);
}

#userRegister .form {
  max-width: 600px;
  margin-top: 20px;
}
</style>

<template>
  <BasicLayout />
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import BasicLayout from "@/layout/BasicLayout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
import { onMounted } from "vue";

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  console.log(store.state.user.loginUser);
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.userRole !== ACCESS_ENUM.ADMIN) {
      next("/NoAuth");
      return;
    }
  }
  next();
});

const doInit = () => {
  console.log("Welcome to Wow OJ");
};

onMounted(() => {
  doInit();
});
</script>

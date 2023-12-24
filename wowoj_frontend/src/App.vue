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

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  console.log(store.state.user.loginUser);
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      next("/NoAuth");
      return;
    }
  }
  next();
});
</script>

<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <UserLayout />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import BasicLayout from "@/layout/BasicLayout.vue";
import { onMounted } from "vue";
import "@/access/index";
import { useRoute } from "vue-router";
import UserLayout from "@/layout/UserLayout.vue";

const route = useRoute();
const doInit = () => {
  console.log("Welcome to Wow OJ");
};

onMounted(() => {
  doInit();
});
</script>

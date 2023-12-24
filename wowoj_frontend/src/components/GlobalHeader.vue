<template>
  <div id="globalHeader">
    <a-menu
      mode="horizontal"
      :default-selected-keys="['1']"
      @menu-item-click="doMenuClick"
      :selected-keys="selectKeys"
    >
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        <div class="title-bar">
          <img class="logo" src="../assets/wow.png" />
          <div class="title">Wow OJ</div>
        </div>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path"
        >{{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();
//默认主页
const selectKeys = ref(["/"]);
router.afterEach((to, from, failure) => {
  selectKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  console.log(key);
  router.push({
    path: key,
  });
};
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  margin-left: 10px;
}

.logo {
  height: 40px;
}
</style>

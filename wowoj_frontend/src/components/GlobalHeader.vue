<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <div>
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
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
//默认主页
const selectKeys = ref(["/"]);
router.afterEach((to, from, failure) => {
  selectKeys.value = [to.path];
});
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "DY",
  });
}, 3000);
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

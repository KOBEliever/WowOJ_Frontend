<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"> UserLayout </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/KOBEliever/WowOJ_Frontend" target="_blank"
          >From a rookie named DY</a
        >
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout .header {
  box-shadow: #eee 1px 1px 5px;
}

#userLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 10px;
  padding: 20px;
}

#userLayout .footer {
  background: azure;
  padding: 10px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>

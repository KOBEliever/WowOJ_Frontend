<template>
  <div id="userLoginLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a-link
          href="https://github.com/KOBEliever/WowOJ_Frontend"
          style="color: white"
          target="_blank"
          :hoverable="false"
          >From a rookie named DY
        </a-link>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLoginLayout {
  background-image: url("../assets/registerBackground.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

#userLoginLayout .content {
  margin-bottom: 5px;
  padding: 20px;
}

#userLoginLayout .footer {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>

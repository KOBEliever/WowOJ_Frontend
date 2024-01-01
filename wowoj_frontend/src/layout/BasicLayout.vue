<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a-link
          href="https://github.com/KOBEliever/WowOJ_Frontend"
          target="_blank"
          :hoverable="false"
          >From a rookie named DY
        </a-link>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout .header {
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  margin-bottom: 10px;
  padding: 20px;
}

#basicLayout .footer {
  background: white;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

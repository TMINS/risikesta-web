<template>
  <div class="layout">

    <baseHead />
    <router-view v-slot="{ Component }">
      <!-- 使用任何自定义过渡和回退到 `fade` route.meta.transition ||  -->
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <baseBotton />
  </div>
</template>

<script lang="ts" setup>
import baseHead from '@/components/baseHead/index.vue'
import baseBotton from '@/components/baseBotton/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  padding-top: 96px;
  font-size: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

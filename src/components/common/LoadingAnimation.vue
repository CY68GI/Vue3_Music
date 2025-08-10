<script setup>
// 定义props
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true
  },
  loadingText: {
    type: String,
    default: '加载中...'
  }
})
</script>

<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="background">
      <span v-for="n in 6" :key="n"></span>
    </div>
    <div class="loading-text">{{ loadingText }}</div>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.background {
  width: 100vw;
  height: 100vh;
  background: var(--bg-secondary);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.background span {
  width: 8vmin;
  height: 8vmin;
  border-radius: 4vmin;
  backface-visibility: hidden;
  position: absolute;
  animation-name: move;
  animation-timing-function: cubic-bezier(0.4, 0, 1, 0.8);
  animation-iteration-count: infinite;
  animation-duration: 3s;
  top: calc(50% - 4vmin);
  left: 50%;
  transform-origin: -4vmin center;
}

.background span:nth-child(1) {
  background: var(--primary-color);
  animation-delay: -0.5s;
  opacity: 0;
}

.background span:nth-child(2) {
  background: #C5F0A4;
  animation-delay: -1s;
  opacity: 0;
}

.background span:nth-child(3) {
  background: #35B0AB;
  animation-delay: -1.5s;
  opacity: 0;
}

.background span:nth-child(4) {
  background: #226B80;
  animation-delay: -2s;
  opacity: 0;
}

.background span:nth-child(5) {
  background: var(--primary-hover);
  animation-delay: -2.5s;
  opacity: 0;
}

.background span:nth-child(6) {
  background: #C5F0A4;
  animation-delay: -3s;
  opacity: 0;
}

.loading-text {
  position: relative;
  z-index: 10;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-top: 2rem;
  text-align: center;
}

@keyframes move {
  0% {
    transform: scale(1) rotate(0deg) translate3d(0, 0, 1px);
  }
  30% {
    opacity: 1;
  }
  100% {
    z-index: 10;
    transform: scale(0) rotate(360deg) translate3d(0, 0, 1px);
  }
}

/* 深色模式适配 */
[data-theme="dark"] .background span:nth-child(2),
[data-theme="dark"] .background span:nth-child(6) {
  background: #7FB069;
}

[data-theme="dark"] .background span:nth-child(3) {
  background: #4A9B8E;
}

[data-theme="dark"] .background span:nth-child(4) {
  background: #2F5F75;
}
</style>

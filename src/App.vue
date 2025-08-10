<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { isMobile, isDesktop, getDeviceInfo, getDeviceType } from './utils/deviceDetector'
import DesktopApp from './components/desktop/DesktopApp.vue'
import MobileApp from './components/mobile/MobileApp.vue'

// 导入全局主题样式
import '../Other/css/style.css'

// 响应式数据
const deviceType = ref('')
const deviceInfo = ref({})
const isMobileDevice = ref(false)
const isDesktopDevice = ref(false)

// 组件挂载时检测设备
onMounted(() => {
  // 简单的设备类型判断
  deviceType.value = getDeviceType()
  isMobileDevice.value = isMobile()
  isDesktopDevice.value = isDesktop()

  // 获取详细设备信息（可选）
  deviceInfo.value = getDeviceInfo()

  // 初始化主题
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark

  const theme = isDark ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  document.body.setAttribute('data-theme', theme)

  // 监听主题变化事件
  window.addEventListener('themeChange', (e) => {
    console.log('主题已切换到:', e.detail.isDark ? '深色模式' : '浅色模式')
  })
})
</script>

<template>
  <div class="app">
    <!-- 移动端显示 -->
    <div v-if="isMobileDevice" class="mobile-content">
      <p>移动端专用功能区域</p>
      <MobileApp />
      <!-- 这里可以添加移动端组件 -->
    </div>

    <!-- 桌面端全屏显示 -->
    <DesktopApp v-else />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.mobile-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.device-info {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.device-type {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.mobile-tips {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  border-radius: 6px;
}

.desktop-tips {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 15px;
  border-radius: 6px;
}

.tablet-tips {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 15px;
  border-radius: 6px;
}

.device-details {
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.device-details summary {
  padding: 10px;
  background: #f8f8f8;
  cursor: pointer;
}

.device-details pre {
  padding: 15px;
  background: #f9f9f9;
  overflow-x: auto;
  font-size: 12px;
}

/* 移动端内容样式 */
.mobile-content {
  text-align: center;
  font-size: 16px;
}

/* 响应式样式 */
@media (max-width: 768px) {
  .app {
    padding: 10px;
  }

  .device-info {
    padding: 15px;
  }
}
</style>

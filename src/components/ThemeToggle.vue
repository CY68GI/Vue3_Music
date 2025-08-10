<script setup>
import { ref, onMounted } from 'vue'

// 当前主题状态
const isDarkMode = ref(false)

// 获取保存的主题或系统偏好
const getInitialTheme = () => {
  // 优先从localStorage获取用户设置
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    return savedTheme === 'dark'
  }

  // 如果没有保存的设置，使用系统偏好
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

// 应用主题到DOM
const applyTheme = (dark) => {
  const root = document.documentElement
  const body = document.body

  if (dark) {
    root.setAttribute('data-theme', 'dark')
    body.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.setAttribute('data-theme', 'light')
    body.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }

  // 触发全局主题变化事件
  window.dispatchEvent(new CustomEvent('themeChange', {
    detail: { isDark: dark }
  }))
}

// 切换主题
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  applyTheme(isDarkMode.value)
}

// 组件挂载时初始化主题
onMounted(() => {
  isDarkMode.value = getInitialTheme()
  applyTheme(isDarkMode.value)

  // 监听系统主题变化
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      // 只有在用户没有手动设置主题时才跟随系统
      if (!localStorage.getItem('theme')) {
        isDarkMode.value = e.matches
        applyTheme(isDarkMode.value)
      }
    })
  }
})
</script>

<template>
  <div class="theme-toggle">
    <button
      @click="toggleTheme"
      class="toggle-button"
      :class="{ 'dark': isDarkMode }"
      :title="isDarkMode ? '切换到浅色模式' : '切换到深色模式'"
    >
      <!-- 太阳图标 (浅色模式) -->
      <svg
        v-if="!isDarkMode"
        class="icon sun-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <!-- 月亮图标 (深色模式) -->
      <svg
        v-else
        class="icon moon-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: var(--nav-hover);
  color: var(--nav-text);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.toggle-button:hover {
  background: var(--nav-active);
  transform: scale(1.05);
}

.toggle-button:active {
  transform: scale(0.95);
}

.icon {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}

/* 太阳图标动画 */
.sun-icon {
  color: #f39c12;
  animation: rotate 20s linear infinite;
}

/* 月亮图标动画 */
.moon-icon {
  color: #f1c40f;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* 深色模式下的按钮样式 */
.toggle-button.dark {
  background: var(--nav-hover);
}

.toggle-button.dark:hover {
  background: var(--nav-active);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .toggle-button {
    width: 36px;
    height: 36px;
  }

  .icon {
    width: 18px;
    height: 18px;
  }
}
</style>

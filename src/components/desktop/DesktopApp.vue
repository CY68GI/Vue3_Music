<script setup>
import DeskNavigation from './DesktopNavigation.vue'
import DeskMain from './DesktopMain.vue'
</script>

<template>
  <div class="desktop-app">
    <!-- 左侧导航栏 -->
    <aside class="desktop-sidebar">
      <DeskNavigation />
    </aside>

    <!-- 右侧主体区域 -->
    <div class="desktop-right">
      <!-- 主要内容区域 -->
      <main class="desktop-main">
        <div class="main-content">
          <h2>主内容区域</h2>
          <p>这里是音乐列表、专辑展示等主要内容</p>
          <DeskMain />
        </div>
      </main>

      <!-- 底部播放器 -->
      <footer class="desktop-footer">
        <div class="play-bar">
          <!-- 播放器控件 -->
          <p>播放器区域</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.desktop-app {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* 左侧导航栏 */
.desktop-sidebar {
  flex-shrink: 0;
  width: 250px;
  background: #2c3e50;
  border-right: 1px solid #34495e;
  overflow-y: auto;
}

/* 右侧主体区域 */
.desktop-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* 防止flex子元素溢出 */
}

/* 主要内容区域 */
.desktop-main {
  flex: 1;
  overflow-y: auto;
  background: var(--bg-secondary);
  padding: 20px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.main-content h2 {
  color: var(--text-primary);
  margin-bottom: 16px;
}

.main-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 底部播放器 */
.desktop-footer {
  flex-shrink: 0;
  width: 100%;
  height: 80px;
  background: var(--player-bg);
  border-top: 1px solid var(--player-border);
  box-shadow: var(--shadow-medium);
}

.play-bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.play-bar p {
  color: var(--text-secondary);
  margin: 0;
}
</style>



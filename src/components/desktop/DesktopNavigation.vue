<script setup>
import ThemeToggle from '../ThemeToggle.vue'
</script>

<template>
  <div class="sidebar-navigation">
    <!-- Logo区域 -->
    <div class="nav-logo">
      <img src="../../assets/Vue_Music_Blur.png" alt="Logo" />
      <h3>Vue Music</h3>
    </div>

    <!-- 搜索框 -->
    <div class="nav-search">
      <div class="search-container">
        <input type="search" placeholder="搜索音乐..." class="search-input" />
        <button class="search-button"> <!-- 搜索按钮组件 -->
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <!-- SVG图标，用于表示搜索功能 -->
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- 导航菜单 -->
    <nav class="nav-menu">
      <ul class="menu-list">
        <li class="menu-item active">
          <a href="#" class="menu-link">
            <span class="menu-icon">🏠</span>
            <span class="menu-text">首页</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <span class="menu-icon">🎵</span>
            <span class="menu-text">我的音乐</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <span class="menu-icon">📱</span>
            <span class="menu-text">歌单</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <span class="menu-icon">⭐</span>
            <span class="menu-text">收藏</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <span class="menu-icon">📻</span>
            <span class="menu-text">电台</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- 主题切换按钮 - 放在底部 -->
    <div class="nav-footer">
      <ThemeToggle />
    </div>
  </div>
</template>

<style scoped>
.sidebar-navigation {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--nav-bg);
  color: var(--nav-text);
  padding: 20px 0;
}

/* Logo区域 */
.nav-logo {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
}

.nav-logo img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.nav-logo h3 {
  color: var(--nav-text);
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

/* 搜索框 */
.nav-search {
  padding: 0 20px;
  margin-bottom: 30px;
}

.search-container {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  height: 36px;
  padding: 0 40px 0 12px;
  border: 1px solid var(--input-border);
  border-radius: 18px;
  font-size: 13px;
  outline: none;
  background: var(--input-bg);
  color: var(--nav-text);
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--input-focus);
  background: var(--nav-hover);
}

.search-input::placeholder {
  color: var(--nav-text-secondary);
}

.search-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: var(--nav-text-secondary);
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.search-button:hover {
  background: var(--nav-active);
  color: var(--nav-text);
}

/* 导航菜单 */
.nav-menu {
  flex: 1;
  padding: 0 10px;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  margin-bottom: 4px;
}

.menu-link {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: var(--nav-text-secondary);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 14px;
}

.menu-link:hover {
  background: var(--nav-hover);
  color: var(--nav-text);
}

.menu-item.active .menu-link {
  background: var(--nav-active);
  color: var(--nav-text);
}

.menu-icon {
  font-size: 16px;
  margin-right: 12px;
  width: 20px;
  text-align: center;
}

.menu-text {
  flex: 1;
}

/* 底部主题切换区域 */
.nav-footer {
  margin-top: auto;
  padding: 20px;
  border-top: 1px solid var(--nav-hover);
  display: flex;
  justify-content: center;
}
</style>


<style scoped>
.desktop-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Logo样式 - 左上角 */
.desktop-navigation__logo {
  flex-shrink: 0;
  width: 120px; /* 固定宽度保持对称 */
}

.desktop-navigation__logo img {
  height: 40px;
  width: auto;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.desktop-navigation__logo img:hover {
  opacity: 0.8;
}

/* 搜索框样式 - 中间 */
.desktop-navigation__search {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 40px;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.search-input {
  width: 100%;
  height: 40px;
  padding: 0 50px 0 16px;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
  background: #f8f9fa;
}

.search-input:focus {
  border-color: #007bff;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.search-input::placeholder {
  color: #999;
}

.search-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: #666;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.search-button:hover {
  background: #f0f0f0;
  color: #007bff;
}

.search-button:active {
  transform: translateY(-50%) scale(0.95);
}

/* 右侧占位区域，保持布局对称 */
.desktop-navigation__spacer {
  flex-shrink: 0;
  width: 120px; /* 与logo区域相同宽度保持对称 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .desktop-navigation {
    padding: 0 16px;
  }

  .desktop-navigation__search {
    margin: 0 20px;
  }

  .search-container {
    max-width: 300px;
  }

  .search-input {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .desktop-navigation {
    height: 50px;
    padding: 0 12px;
  }

  .desktop-navigation__logo img {
    height: 32px;
  }

  .desktop-navigation__search {
    margin: 0 16px;
  }

  .search-container {
    max-width: 250px;
  }

  .search-input {
    height: 36px;
    font-size: 12px;
  }

  .search-button {
    width: 28px;
    height: 28px;
  }
}
</style>


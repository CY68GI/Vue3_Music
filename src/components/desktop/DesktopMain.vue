<script setup>
import { ref, onMounted } from 'vue'
import DeskData from './DesktopDatabar.vue'
import LoadingAnimation from '../common/LoadingAnimation.vue'

// 加载状态
const isLoading = ref(true)

const musicList = [
  {
    AlbumTitle: '流行经典',
    MusicName: '七里香',
    SingerName: '周杰伦',
    albumCover: '../../assets/Vue_Music_Blur.png'
  },
  {
    AlbumTitle: '摇滚传奇',
    MusicName: '海阔天空',
    SingerName: 'Beyond',
    albumCover: '../../assets/Vue_Music_Blur.png'
  },
  {
    AlbumTitle: '民谣时光',
    MusicName: '南山南',
    SingerName: '马頔',
    albumCover: '../../assets/Vue_Music_Blur.png'
  },
  {
    AlbumTitle: '电子音乐',
    MusicName: 'Faded',
    SingerName: 'Alan Walker',
    albumCover: '../../assets/Vue_Music_Blur.png'
  },
  {
    AlbumTitle: '古风韵味',
    MusicName: '青花瓷',
    SingerName: '周杰伦',
    albumCover: '../../assets/Vue_Music_Blur.png'
  },
  {
    AlbumTitle: '抒情经典',
    MusicName: '夜曲',
    SingerName: '周杰伦',
    albumCover: '../../assets/Vue_Music_Blur.png'
  }
]

// 模拟数据加载
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000) // 2秒后隐藏加载动画
})
</script>

<template>
  <div class="main">
    <!-- 加载动画 -->
    <LoadingAnimation :isLoading="isLoading" loadingText="正在加载音乐数据..." />

    <!-- 主要内容 -->
    <div v-if="!isLoading" class="content">
      <DeskData
        v-for="(music, index) in musicList"
        :key="index"
        :AlbumTitle="music.AlbumTitle"
        :MusicName="music.MusicName"
        :SingerName="music.SingerName"
        :albumCover="music.albumCover"
      />
    </div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  padding: 20px;
  background-color: var(--bg-secondary);
  min-height: 100vh;
  transition: background-color 0.3s ease;
}

.content {
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out 0.2s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

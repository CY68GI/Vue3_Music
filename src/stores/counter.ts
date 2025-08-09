import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 导出一个名为useCounterStore的常量，该常量是一个defineStore函数的返回值
export const useCounterStore = defineStore('counter', () => {
  // 定义一个名为count的ref变量，初始值为0
  const count = ref(0)
  // 定义一个名为doubleCount的computed变量，其值为count.value * 2
  const doubleCount = computed(() => count.value * 2)
  // 定义一个名为increment的函数，每次调用时count.value加1
  function increment() {
    count.value++
  }

  // 返回count、doubleCount和increment三个变量
  return { count, doubleCount, increment }
})

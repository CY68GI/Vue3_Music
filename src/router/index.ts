import { createRouter, createWebHistory } from 'vue-router' /** * 导入Vue Router相关功能 * createRouter: 用于创建路由实例 * createWebHistory: 用于创建HTML5历史模式的路由 */

const router = createRouter({ /** * 创建路由实例 * history: 使用HTML5历史模式，基于环境变量中的BASE_URL * routes: 初始化一个空数组，表示当前没有定义任何路由规则 */
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router //  导出路由实例，供其他组件使用

import { fileURLToPath } from 'node:url' //  导入fileURLToPath模块，用于将URL转换为文件路径
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config' //  导入mergeConfig、defineConfig和configDefaults模块，用于合并配置、定义配置和获取默认配置
import viteConfig from './vite.config' //  导入viteConfig模块，用于获取vite的配置

export default mergeConfig( //  导出一个默认的合并配置
  viteConfig, //  vite配置
  defineConfig({ //  定义配置
    test: { //  测试配置
      environment: 'jsdom', //  测试环境
      exclude: [...configDefaults.exclude, 'e2e/**'], //  排除测试文件
      root: fileURLToPath(new URL('./', import.meta.url)), //  根目录
    },
  }),
)

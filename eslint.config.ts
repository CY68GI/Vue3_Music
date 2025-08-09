import { globalIgnores } from 'eslint/config' //  导入全局忽略配置
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript' //  导入带有Vue和TypeScript的ESLint配置
import pluginVue from 'eslint-plugin-vue' //  导入Vue ESLint插件
import pluginVitest from '@vitest/eslint-plugin' //  导入Vitest ESLint插件
import pluginPlaywright from 'eslint-plugin-playwright' //  导入Playwright ESLint插件
import pluginOxlint from 'eslint-plugin-oxlint' //  导入Oxlint ESLint插件
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting' //  导入跳过格式化的Prettier ESLint配置

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs( //  导出一个默认配置，使用defineConfigWithVueTs函数
  {
    name: 'app/files-to-lint', //  配置名称
    files: ['**/*.{ts,mts,tsx,vue}'], //  需要检查的文件类型
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']), //  全局忽略的文件

  pluginVue.configs['flat/essential'], //  使用vueTsConfigs.recommended配置
  vueTsConfigs.recommended,

  { //  使用pluginVitest.recommended配置，并指定需要检查的文件
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  { //  使用pluginPlaywright.recommended配置，并指定需要检查的文件
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  ...pluginOxlint.configs['flat/recommended'], //  使用pluginOxlint.recommended配置
  skipFormatting, //  跳过格式化
)

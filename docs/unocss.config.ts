import path from 'path'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      // 指定默认图标库
      collections: {
        ri: () => import('@iconify-json/ri').then((i) => i.default),
      },
      // 图标缩放
      scale: 1.2,
      // 默认图标颜色
      defaultColor: 'currentColor',
      // 图标尺寸模式，使用em单位以便跟随文字大小
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      // 自动安装图标库
      autoInstall: true,
    }),
  ],
  // 使用绝对路径确保能扫描到所有文件
  include: [
    path.resolve(__dirname, '**/*.md'),
    path.resolve(__dirname, '**/*.vue'),
    path.resolve(__dirname, '.vitepress/vitepress/components/**/*.vue'),
  ],
  exclude: [
    path.resolve(__dirname, 'node_modules/**/*'),
    path.resolve(__dirname, '.vitepress/dist/**/*'),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        deep: '#1d4ed8',
      },
    },
  },
  // 确保 safelist 包含所有需要的类
  safelist: [
    // 文字大小
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    // Flex 布局
    'flex',
    'flex-col',
    'flex-row',
    'flex-wrap',
    'items-center',
    'justify-start',
    'justify-center',
    'justify-between',
    // Gap
    'gap-1',
    'gap-2',
    'gap-3',
    'gap-4',
    'gap-5',
    'gap-6',
    'gap-8',
    // 文字颜色
    'text-gray-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-red-500',
    'text-purple-500',
    // 所有用到的图标类
    'i-ri-search',
    'i-ri-edit-line',
    'i-ri-check-line',
    'i-ri-delete-bin-line',
    'i-ri-message-circle-line',
  ],
})

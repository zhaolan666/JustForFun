/**
 * 样式按需加载工具
 * 
 * 使用示例：
 * 
 * // 方式 1：直接导入单个组件样式
 * import '@justforfun-ui/theme-chalk/button.css'
 * 
 * // 方式 2：使用命名导入
 * import { button } from 'justforfun-ui/theme-chalk'
 * 
 * // 方式 3：导入所有样式（不推荐）
 * import 'justforfun-ui/theme-chalk/index.css'
 */

// 基础样式
export const loadBase = () => import('./base.css')
export const loadReset = () => import('./reset.css')

// 基础组件
export const loadButton = () => import('./button.css')
export const loadIcon = () => import('./icon.css')
export const loadInput = () => import('./input.css')
export const loadBadge = () => import('./badge.css')
export const loadBorder = () => import('./border.css')

// 布局组件
export const loadLayout = () => import('./layout.css')

// 表单组件
export const loadForm = () => import('./form.css')
export const loadCheckbox = () => import('./checkbox.css')
export const loadRadio = () => import('./radio.css')
export const loadSelect = () => import('./select.css')
export const loadSwitch = () => import('./switch.css')

// 数据组件
export const loadAvatar = () => import('./avatar.css')
export const loadCard = () => import('./card.css')
export const loadTag = () => import('./tag.css')

// 导航组件
export const loadTabs = () => import('./tabs.css')
export const loadDropdown = () => import('./dropdown.css')

// 反馈组件
export const loadDialog = () => import('./dialog.css')
export const loadAlert = () => import('./alert.css')
export const loadMessage = () => import('./message.css')

// 默认导出所有加载器
export default {
  loadBase,
  loadReset,
  loadButton,
  loadIcon,
  loadInput,
  loadBadge,
  loadBorder,
  loadLayout,
  loadForm,
  loadCheckbox,
  loadRadio,
  loadSelect,
  loadSwitch,
  loadAvatar,
  loadCard,
  loadTag,
  loadTabs,
  loadDropdown,
  loadDialog,
  loadAlert,
  loadMessage,
}

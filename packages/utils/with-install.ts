import type { Plugin } from 'vue'
// 通过 Vue 提供的 Plugin 类型和传进来的组件类型 T 的集合进行确定我们的组件类型具有 Plugin 类型方法，如 install 方法
export type SFCWithInstall<T> = T & Plugin
// Record 后面的泛型就是对象键和值的类型
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ; (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      // 将来可以通过基础组件访问同组别的其他组件，例如：JffButton.ButtonGroup 同样可减少用户需要手动引用的代码量
      ; (main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}

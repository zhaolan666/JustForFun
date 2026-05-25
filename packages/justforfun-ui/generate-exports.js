import { readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const componentsDir = join(__dirname, '../components')
const outputDir = join(__dirname, '..')

// 读取所有组件目录
const components = readdirSync(componentsDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)
  .filter((name) => !name.startsWith('.'))

// 生成 exports 配置
const exportsConfig: Record<string, any> = {
  '.': {
    types: './index.ts',
    import: './index.ts',
    require: './index.ts',
  },
  './components': {
    types: './components.ts',
    import: './components.ts',
  },
  './theme-chalk': {
    types: './theme-chalk.ts',
    import: './theme-chalk.ts',
  },
  './resolver': {
    types: './resolver.ts',
    import: './resolver.ts',
  },
}

// 为每个组件添加导出配置
components.forEach((component) => {
  const componentName = component.charAt(0).toUpperCase() + component.slice(1)
  
  // 组件导出
  exportsConfig[`./${component}`] = {
    types: `../components/${component}/index.ts`,
    import: `../components/${component}/index.ts`,
  }
  
  // 组件样式导出
  exportsConfig[`./theme-chalk/${component}.css`] = {
    style: `../theme-chalk/${component}.css`,
  }
  
  exportsConfig[`./theme-chalk/src/${component}.scss`] = {
    style: `../theme-chalk/src/${component}.scss`,
  }
})

// 写入 package.json
const packageJsonPath = join(outputDir, 'package.json')
const packageJson = JSON.parse(
  require('fs').readFileSync(packageJsonPath, 'utf-8')
)

packageJson.exports = {
  ...packageJson.exports,
  ...exportsConfig,
}

writeFileSync(
  packageJsonPath,
  JSON.stringify(packageJson, null, 2) + '\n'
)

console.log('✅ Exports configuration updated successfully!')

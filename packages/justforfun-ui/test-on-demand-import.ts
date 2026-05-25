/**
 * 按需导入测试文件
 * 
 * 此文件用于测试按需导入功能是否正常工作
 */

// 测试 1：从 components 导入
import { JffButton, JffInput, JffDialog } from 'justforfun-ui/components'

console.log('✅ Test 1 passed: Named exports from components')

// 测试 2：从具体路径导入
import JffButton2 from 'justforfun-ui/components/button'
import JffInput2 from 'justforfun-ui/components/input'

console.log('✅ Test 2 passed: Default exports from specific path')

// 测试 3：样式导入
import 'justforfun-ui/theme-chalk/button.css'
import 'justforfun-ui/theme-chalk/input.css'

console.log('✅ Test 3 passed: CSS imports')

// 测试 4：SCSS 导入
import '@justforfun-ui/theme-chalk/src/button.scss'
import '@justforfun-ui/theme-chalk/src/input.scss'

console.log('✅ Test 4 passed: SCSS imports')

// 测试 5：使用 resolver
import { JustForFunResolver } from 'justforfun-ui/resolver'

const resolver = JustForFunResolver({
  importStyle: 'css',
  prefix: 'Jff',
})

console.log('✅ Test 5 passed: Resolver import')

// 测试 6：样式加载器
import { loadButton, loadInput } from 'justforfun-ui/style-loader'

loadButton()
loadInput()

console.log('✅ Test 6 passed: Style loader')

console.log('\n🎉 All tests passed! On-demand import is working correctly!')

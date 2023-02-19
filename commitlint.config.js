// // commit使用'ts-node'，它太慢了 所以用' esbuild '替换' ts-node '来加载typescript配置。
require('@esbuild-kit/cjs-loader')
module.exports = require('./commitlint.config.ts').default



/**
 * 1. 首先使用 require('@esbuild-kit/cjs-loader') 导入 @esbuild-kit/cjs-loader 模块，该模块可能是一个 CommonJS 模块（因为使用了 require），其作用是让 ES modules 支持 CommonJS 的模块语法，
 * 因为 commitlint.config.ts 可能是一个 ES module。
 * 2. 然后通过 module.exports 将 commitlint.config.ts 模块中的默认导出（即 default 属性）导出为一个 CommonJS 模块，以便其他 CommonJS 模块可以通过 require 导入并使用该模块中的默认导出。
 * 
 * 简而言之，这段代码的作用是将 commitlint.config.ts 中的默认导出转换为一个 CommonJS 模块，以便在其他使用 CommonJS 的地方可以使用该导出。
 */

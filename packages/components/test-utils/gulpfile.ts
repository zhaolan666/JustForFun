//script/build/gulpfile.ts

import {resolve} from 'path'

// 组件库根目录
 const componentPath = resolve(__dirname,'../../')

import { spawn } from 'child_process'
import { series, src, dest, task } from 'gulp'
import { componentPath } from './utils/paths'
import less from "gulp-less"
import autoprefixer from 'gulp-autoprefixer'
const run = async (command: string) => {
    //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
    const [cmd, ...args] = command.split(' ')
    return new Promise((resolve, reject) => {
        const app = spawn(cmd, args, {
            cwd: componentPath,//目录指的是组件库根目录
            stdio: 'inherit', //输出共享给父进程
            shell: true //mac不需要开启，windows下git base需要开启支持
        })
        //执行完毕关闭并resolve
        app.on('close', resolve)
    })
}

//处理样式
const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.less`)
        .pipe(less())
        .pipe(
            autoprefixer()
        )
        .pipe(dest(`${componentPath}/dist/lib/src`))
        .pipe(dest(`${componentPath}/dist/es/src`));
};


export default series(async () => run(`rm -rf ${componentPath}/dist`), async () => buildStyle())


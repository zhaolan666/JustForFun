# 忽略错误
set -e #有错误抛出错误

# 构建
npm run docs:build #然后执行打包命令

# 进入待发布的目录
cd docs/.vitepress/dist  #进到dist目录

git init #执行这些git命令
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:zhaolan666/JustForFun.git master:gh-pages   #提交到这个分支

cd -


rm -rf docs/.vitepress/dist  #提交到这个分支
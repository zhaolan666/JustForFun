# Install 

## NRM 
> Use the mirror source management tool, Easy to manage mirror source, fast switching source 
#### Download
``` shell
# NRM
$ npm install -g nrm 
```

#### use
**View optional sources**
``` shell
$ nrm ls
* npm  ------------  https://registry.npmjs.org/
yarn  -------------  https://registry.yarnpkg.com/
tencent  ----------  https://mirrors.cloud.tencent.com/npm/
cnpm  -------------  https://r.cnpmjs.org/
taobao  -----------  https://registry.npmmirror.com/
npmMirror  --------  https://skimdb.npmjs.com/registry/
```
Among them, The * is the source currently in use, and the output above indicates that the current source is the official source

#### add source
``` shell
# Official source and private service group
$ npm add xxx http://xxx.xxx.xx/repository/

# Private service package
$ nrm add xxx http://xxx.xxx.xx/repository
```

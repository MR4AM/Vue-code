# vue-code项目介绍

> 基于vue搭建javue组件化市场及常用vue业务案例，主要包括组件封装类、页面模块类，业务模块类
### 项目启动运行
> git clone 将代码克隆至本地
> npm install 安装项目所需依赖包
> npm start 执行脚本运行项目
## 关于Vue的优势及与angular、react的对比
https://blog.csdn.net/qq_39985511/article/details/78992426

## 关于Vue的网上使用及开发案列
https://blog.csdn.net/weixin_42262436/article/details/80724653

## 关于git命令行的一些总结
- git log 查看日志
- git add 添加文件到暂存区
- git commit 添加文件到寄存区
- git push 推送本地仓库代码到远程分支
- git pull 拉取远程仓库代码到本地仓库
- git status 查看文件的状态
- git revert HEAD 撤销前一次 commit 
- git revert HEAD^ 撤销前前一次 commit
- git revert commit-id (撤销指定的版本，撤销也会作为一次提交进行保存） 
- git revert是提交一个新的版本，将需要revert的版本的内容再反向修改回去，版本会递增，不影响之前提交的内容。
- git reset commit_id （回退到上一个 提交的节点 代码还是原来你修改的） 
- git reset –hard commit_id （回退到上一个commit节点， 代码也发生了改变，变成上一次的）
- git branch 查看代码分支
- git checkout branchname 切换到branchname的分支
- git checkout  -b branchname 创建分支名为branchname的分支
- git push -f origin branchname 将修改回退后的代码强推到远程仓库
- git pull --allow-unrelated-histories 允许拉取两个不同源的分支代码
- git push origin branchname --allow-unrelated-histories 允许推送两个不同源的分支代码到远程
- git merge branchname 将分支名为branchname的分支合并到当前分支
- git diff 比较的是暂存区和工作区的差异
- git remote 查看仓库名
- git clone gitaddress 将地址为gitaddress的远程仓库克隆到本地,地址分git加密协议和http协议两种
- ssh-keygen –t rsa –C “address” 将git账号对应的邮箱生成ssh密钥，使本地全局位置拥有与远程仓库推送拉取的权限
- git reflog 可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）
- git rebase -i 进入vim编辑查看并编辑当前分支的commit操作，其中pick为挑选提交，drop为删除提交，qw保存后按Esc+ZZ退出当前rebase vim编辑
- 

## 使用花生壳平台进行内网穿透将本机项目通过中转允许外网访问
> 花生壳官网 https://hsk.oray.com/
### 内网穿透流程
- 1.注册花生壳账号获取临时的域名
- 2.购买内网穿透服务，将域名IP地址指向本机的公网ip地址
- 3.配置内网映射，获取本地以太网ipv4的物理地址，配置对应的本机服务端口
- 4.将远程访问映射到对应的局域网服务

## sass的进阶使用
- > sass安装和使用 https://www.cnblogs.com/bettyling/p/6070734.html
- > ruby下载官网 https://rubyinstaller.org/downloads/

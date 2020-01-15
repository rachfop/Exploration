---
title: 搭建自己的个人博客
tag: Blog
---

花了近三个小时的时间学习通过github搭建免费的个人博客，
标榜为五分钟解决的事，居然花了我这么久，
其中的坎坷不言而知。  

> 1. 软件安装
软件安装过程中，第一次按照“5分钟 搭建免费个人博客”这片文章进行，命令使用过程中遇到了诸如“是不是这样用的”“这样装就好了吗”等问题，安装过程中的下载阶段还因为网络问题，导致进度很慢，最后安装完成以后，nvm,npm,hexo等命令使用时，出现command not found，找过度娘以后知道应该是环境变量配置的问题，不过Mac环境变量的配置一直不会，搁置，最后直接通过brew install 安装所需软件，问题解决。  

> 2. 推送至github时页面显示不一致
在本地做测试时，页面显示没问题，但是推送至github以后，访问wetoria.github.io出现诸如头像图片未加载，动态效果未显示等问题，打开调试发现时头像图片找不到，修改了_config.yml中的logo键值对得到解决。  

但是动态效果看报错有点迷糊，不会解决。说是insecure content，但是这块我不懂啊，是什么鬼哦。但是Monniya的Blog能显示啊，我就觉得可能是repo的设置有问题，看了下果然，＝ ＝默认域名只能使用Https协议的内容，但是更改成Https也没用啊。  
  
  

后来百度了下，直接删掉http:，ok问题解决。好坑爹。  
  
  
至此，个人博客已经搭建完毕了，未来还要继续完善，比如，还要添加什么功能，以及我要用它来记录什么呢？
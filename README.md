1) 仿360商城写的demo，完成度较高。欢迎大神路过抛砖！ 可通过BAE在线链接直接打开：http://wesleyq5233pj360mall.duapp.com/html/index.html； 喜欢的话也可以通过我的github：https://github.com/WesleyQ5233/360Mall.git下载源码，喜欢的话你就star一下。



2） 主要功能及技术点：购物车页面的增删改查、商品详情页的分页效果、登录注册逻辑的实现、二级菜单、吸顶、首页的楼梯效果、ajax、跨域、轮播图、选项卡、代码封装、css3悬浮效果等；



 3）整体构架：对于页面中相同的部分，单独写成一个html文件（仅包括样式css、html、script，去掉头部尾部等多余的部分，然后通过ajax加载进来； PS：关于ajax运行环境像Hbuilder、Webstorm等自带ajax运行环境，也可以自己下载个软件搭建本地服务器；

     实现页面：首页、商品列表、商品详情、购物车、结算页面、注册、登录；



 4）页面传值：采用cookie方式实现不同页面间数据的传递。

一个cookie存所有注册账号、

一个cookie存当前登录账号、

并根据当前登录账号拼接购物车cookie 这样就可以实现不同账号同时访问而不产生冲突了。 

PS：对于没有登录的情况统一设置一个名字为mycartadmin的cookie进行存储。

这里有个梗就是多人同时登录而且都没有登录情况下数据存储的矛盾。

解决方法一点击购物车的时候必须登录，显然这个不太合理； 

解决方法二此时再根据ip地址和网站停留时间去判断下； 

还有个cookie用来弥补解决商品详情间的情况。

也可以使用localStorage，上限为5M 而cookie为4KB最为页面间的数据存取。



5）跨域：首页楼梯十一楼的div所用数据是通过jsonp加载进来的。所用到的PHP文件我已经放在BAE云端，大家也可以看看我写的接口数据，链接http://wesleyq5233php.duapp.com；



6）ajax：对于页面中相同的部分，单独写成一个html文件（仅包括样式css、html、script，去掉头部尾部等多余的部分，然后通过ajax加载进来； PS：关于ajax运行环境像Hbuilder、Webstorm等自带ajax运行环境，也可以自己下载个软件搭建本地服务器。

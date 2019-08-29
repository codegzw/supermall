#创建项目与GitHub托管
##GitHub托管
     1. 与GitHub仓库 建立连接 git clone https://github.com/codegzw/supermall.git
     2.将文件复制到supermall 文件夹
     3、git status
     4、git add .
     5、git status
     6、git commit -m '初始化项目'
     7.git push
#划分目录结构
# src:
      assets------------------静态资源
      common-----------------公共js
      components--------------公共组件目录
               common---------公用组件
                   tabbar------tabbar
               content--------内容组
      views-------------------视图目录
               cart-----------购物车
               category --------分类
               home-----------首页
               profile--------我的
      router-----------------路由目录
      store-----------------vuex状态管理
      newWord---------------网络请求
#css重置
normalize.css
   
#地址别名
vue.config.js

#tabbar组件

#安装axios
  npm install axios -save

#封装tabbar组件，navbar组件

#首页
##封装FeatuerView组件，Swipe组件，Recommend组件
##商品数据的请求与渲染

##better-scroll页面滑动框架
###安装 npm install better-scroll --save
1.封装Scroll.vue
  1.1.必须给最外层设置固定高度 
  1.2.监听滑动位置
  1.3监听上拉加载动作
2.封装backTop组件
  2.1显示和隐藏
  2.2监听滚动位置：

##解决首页中滑动区域滚动的问题
  1.Better_scroll 可以滚动多少区域，是根据‘scrollerHeight’属性决定的
  2.在首页中，刚开始计算‘ scrollerHeight ’属性时，是没有将 图片 计算在内的
  3.后来图片加载后的 新高度 ，scrollerHeight 属性没有更新，所以出现的问题
#3解决方案：
        0.在main.js中定义 事件总线 ：$bus ( Vue.prototype.$bus = new Vue() )
        1.监听每一个图片，（GoodsListItem.vue中用 @load）
        2.将监听结果用 $bus 管理
          imageLoad(){
              this.$bus.$emit('itemImageLoad')
            }
        3.在 home.vue 中的生命周期created 中接受,并 refresh()刷新
          this.$bus.$on('itemImageLoad',()=>{
              this.$refs.scroll.refresh()

          })
## 对于 refresh 刷新 非常频繁的问题，进行防抖操作
   防抖 debounce/ 节流throttle

   防抖函数起作用的过程：
        。如果我们直接执行refresh, 会被执行30次
        。可以将 refresh 函数传入到 debounce 函数中生存新的函数

#tabControl 的吸顶效果

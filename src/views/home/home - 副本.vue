<template>
    <div class="home">
        <navbar class="home-nav">
            <div slot="nav-center">购物街</div>
        </navbar>

        <scroll class="content" 
                ref="scroll" 
                :probe-type="3"
                @scroll="getscroll"
                @pullingUp="loadMore">
            <swipe :swipeLise="banners"></swipe>
            <recommend :recommend="recommend"></recommend><!--推荐 -->
            <featureView></featureView><!--本周流行 -->
            <tabControl class="tabControl" :tabtitles="['流行','新款','精选',]" @clickTab="clickTab"></tabControl>
            <goodsList :goodsListData="showGoods"/>

        </scroll>
        <backTop @click.native="backTop" v-show="isShow"></backTop>
        

      
    </div>
</template>
<script>
import navbar from '@/components/common/navbar/NavBar.vue'
import scroll from '@/components/common/scroll/Scroll.vue'

import tabControl from '@/components/content/tabControl/TabControl.vue'
import goodsList from 'components/content/goods/GoodsList.vue'
import backTop from 'components/content/backTop/BackTop.vue'


import swipe from '@/views/home/childCmps/Swipe.vue'
import recommend from '@/views/home/childCmps/Recommend.vue'
import featureView from '@/views/home/childCmps/FeatureView.vue'

import {getHomeMultidata,getHomeGoods} from '@/netWork/home.js'
import { constants } from 'crypto';
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            banners:[],
            recommend:[],
            goods:{
                'pop':{page:1,list:[]},
                'new':{page:1,list:[]},
                'sell':{page:1,list:[]},
            },
            currentType:'pop',
            isShow:false
        }
    },
    computed:{
        showGoods(){
           return this.goods[this.currentType].list
        }
    },
    components:{
        navbar,
        swipe,
        recommend,
        featureView,
        tabControl,
        goodsList,
        scroll,
        backTop
    },
    created(){
        //1.请求首页banner和recommend
       this.getHomeMultidata()
        //2.请求首页商品
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
        
    },
    mounted(){
        //监听每个图片
        const refresh = this.debounce(this.$refs.scroll.refresh,500)
        this.$bus.$on('itemImageLoad',()=>{
            refresh()
        })
    },
    
    methods:{
        //防抖函数
        debounce(func,delay){
            let timer = null //是否有定时器
            return function(...args){
                if (timer) clearTimeout(timer);//有新的timer 清除上一个timer
                timer = setTimeout(()=>{//重新计时
                 func.apply(this,args)
                },delay)
            }
        },
        /**
        数据请求区
         */
        //1.请求首页banner和recommend
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                this.banners=res.data.data.banner.list;
                this.recommend=res.data.data.recommend.list
            });
        },
        //2.请求首页商品
        getHomeGoods(type){
            const page = this.goods[type].page
            getHomeGoods(type,page).then(res=>{
                this.goods[type].list.push(...res.data.data.list)
                this.goods[type].page+=1

                 this.$refs.scroll.finishPullUp()///Scroll加载结束，准备下一次加载
            })
        },
        /**
        事件监听区
         */
         clickTab(i){
             switch(i){
                case 0:
                     this.currentType = 'pop'
                     break
                case 1:
                     this.currentType = 'new'
                     break
                case 2:
                    this.currentType = 'sell'
                    break
             }

         },
         backTop(){
           //this.$refs.scroll.bsroll.scrollTo(0,0,500);//取出BackTop组件中的data变量bsroll,并设置scrollTo(0,0)
           this.$refs.scroll.scrollTop(0,0,500);//取出BackTop组件中的 scrollTop(0,0,500) 【封装事件】
         },
         getscroll(i){
             this.isShow=-i.y>1000
         },
        //  loadMore(){
        //      this.getHomeGoods(this.currentType)
        //  }


        
        
    }
}
</script>
<style  scoped>
.home{
    height: 100vh;
}
.home-nav{
    background: #FF5777;
}
.tabControl{
    position:sticky;
    top:44px;
    background:#fff;
    z-index: 99;
    box-shadow: 0 1px 2px #eee;
}
.content{
    /* height:calc(100% - 93px); */
    position: absolute;
    top:44px;
    bottom:49px;
    overflow: hidden;
}
</style>

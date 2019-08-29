<template>
<!-- g必须给最外层设置固定高度 -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>

        
    </div>
</template>
<script>
import BSroll from 'better-scroll'
export default {
    props:{
        probeType:{
            probeType:Number,
            default:0
        }

    },
    data(){
        return{
            bsroll:null,
            pullUpLoad:false


        }
    },
    mounted(){
        //1.创建BScroll对象
        this.bsroll=new BSroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        ///2.监听滚动的位置
        this.bsroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        //3.监听上拉加载动作
        this.bsroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
        //
       
        
    },
    methods:{
        scrollTop(x,y,time=400){//回到顶部
            this.bsroll.scrollTo(x,y,time)
        },
        finishPullUp(){////Scroll加载结束，准备下一次加载
            this.bsroll.finishPullUp()

        },
         refresh(){//刷新
              this.bsroll && this.bsroll.refresh()
              
         }

    }
    
}
</script>
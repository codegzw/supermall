<template>
    <div class="tab_control">
        <div v-for="(item,i) in tabtitles" :key="i" class="tab_item" :class="{active:i===Count}" @click="itemclick(i)">
            <span>{{item}}</span>

        </div>
        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            Count:0

    }},
    props:['tabtitles'],
    methods:{
        itemclick(i){
            this.Count=i,
            this.$emit('clickTab',i)

        }
    }
    
}
</script>
<style scoped>
.tab_control{
    width:100%;
    display: flex;
    font-size:15px;
}
.tab_item{
    flex:1;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.active{
    color:#FF5777;
}
.active span{
     border-bottom: 3px solid #FF5777;
     padding:5px 2px;

}

</style>
 //防抖函数
export function debounce(func,delay){
    let timer = null //是否有定时器
    return function(...args){
        if (timer) clearTimeout(timer);//有新的timer 清除上一个timer
        timer = setTimeout(()=>{//重新计时
         func.apply(this,args)
        },delay)
    }
}
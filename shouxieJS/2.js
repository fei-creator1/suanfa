//题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
function mySettimeout() {
    let timer = null;
    function interval() {
        fn();
        timer = setTimeout(interval, t);
    }
    interval();
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}
//扩展：我们能反过来使用 setinterval 模拟实现 settimeout吗？
const mySettimeout = (fn, time) => {
    const timer = setInterval(() => {
        clearInterval(timer);
        fn();
    }, time);
}

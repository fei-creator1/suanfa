// //compose use
// function fn1() {
//     return x + 1;
// }
// function fn2() {
//     return x + 2;
// }
// function fn3() {
//     return x + 3;
// }
// function fn4() {
//     return x + 4;
// }

// const a = compose(fn1, fn2, fn3, fn4);
// console.log(a(1));  



//  realization(实现)

function compose(...fn) {
    if (!fn.length) return (v) => v;
    if (fn.length === 1) return fn[0];
    return fn.reduce(
        (pre, cur) =>
            (...args) =>
                pre(cur(...args))
    );

}
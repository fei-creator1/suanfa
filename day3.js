//NO.1
var hammingWeight = function (n) {
    return n.toString(2).split('').filter(i => i === '1').length
};

//NO.2
var subtractProductAndSum = function (n) {
    const nums = Array.from(String(n)).map(Number)
    const product = nums.reduce((a, v) => a * v)
    const sum = nums.reduce((a, v) => a + v)
    return product - sum
};

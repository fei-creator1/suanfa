var countOdds = function (low, high) {
    return count(high) - count(low - 1)
};

var count = function (x) {
    if (x == 0) return 0
    return Math.ceil(x / 2)
}
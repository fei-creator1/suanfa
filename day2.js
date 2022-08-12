var average = function (salary) {
    salary.sort((a, b) => a - b);
    let sum = 0;
    len = salary.length - 2;
    for (let i = 1; i <= len; i++) {
        sum += salary[i];
    }
    return sum / (len);

}
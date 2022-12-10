function countTruthy(arr) {
    const arr = [0, null, "", -0, undefined, NaN, false]

    let count = 0;
    for (let item of arr){
        if (item){
            return count++;
        }
    }
}
module.exports = countTruthy
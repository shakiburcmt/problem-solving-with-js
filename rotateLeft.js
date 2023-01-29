function rotateLeft(arr, rotate) {
    for (let loop = 0; loop < rotate; loop++) {
        arr.push(arr.shift());
    }
    return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5], 2));
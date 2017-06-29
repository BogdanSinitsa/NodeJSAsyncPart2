function range(from, to) {
    let arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }
   return arr;
}

for (let value of range(3, 10)) {
    console.log(value);
}
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
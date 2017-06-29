function range(from, to) {
    const it = function* () {
        for (let i = from; i <= to; i++) {
            yield i;
        }
    }();

   return it;
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
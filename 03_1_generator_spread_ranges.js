function range(from, to) {
    const it = function* () {
        for (let i = from; i <= to; i++) {
            yield i;
        }
    }();

   return it;
}

let numbers = [...range(5, 12)];

console.log(numbers);
// [ 5, 6, 7, 8, 9, 10, 11, 12 ]
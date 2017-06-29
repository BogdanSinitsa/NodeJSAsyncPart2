function* twoPlusTwo() {
    let result = yield 2 + 2;
    console.log(result);
    //5
}

let it = twoPlusTwo();

let result = it.next();
console.log(result);
//{ value: 4, done: false }
it.next(result.value + 1);
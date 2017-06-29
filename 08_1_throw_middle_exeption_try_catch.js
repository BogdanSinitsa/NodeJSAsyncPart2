function* twoPlusTwo() {
    try {
        let result = yield 2 + 2;
    } catch (e) {
        console.log(e.message);
        //Invalid expression
    }
}

let it = twoPlusTwo();

let result = it.next();
console.log(result);
//{ value: 4, done: false }
it.throw(new Error('Invalid expression'));
function* doThm(n) {
    yield n;

    let innerResult = yield 2;
    console.log(innerResult); //Never executes

    yield 3;
    yield 4;
    yield 5;
}

let it = doThm(1);
let result1 = it.next();
console.log(result1);
//{ value: 1, done: false }

let result2 = it.next();
console.log(result2);
//{ value: 2, done: false }

let result3 = it.return(10);
console.log(result3);
//{ value: 10, done: true }
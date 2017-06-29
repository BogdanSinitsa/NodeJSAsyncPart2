
function* doSth() {
    yield "Hello world";
    yield "Hello world 2";

    return 'Finally done';
}

let it = doSth();

let result = it.next();
console.log(result);
//{ value: 'Hello world', done: false }

let result2 = it.next();
console.log(result2);
//{ value: 'Hello world 2', done: false }

let result3 = it.next();
console.log(result3);
//{ value: 'Finally done', done: true }

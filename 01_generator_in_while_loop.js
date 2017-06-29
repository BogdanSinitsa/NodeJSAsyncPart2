function* doSth() {
    yield "Hello world";
    yield "Hello world 2";

    return 'Finally done';
}

let it = doSth();

let result;

while (!(result = it.next()).done) {
    console.log(result.value);
}
//Hello world
//Hello world 2

console.log('return result:', result.value);
//return result: Finally done
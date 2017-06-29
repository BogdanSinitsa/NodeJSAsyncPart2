function* doSth() {
    yield "Hello world";
    yield "Hello world 2";

    return 'Finally done';
}

let it = doSth();

for (let value of it) {
    console.log(value);
}
//Hello world
//Hello world 2
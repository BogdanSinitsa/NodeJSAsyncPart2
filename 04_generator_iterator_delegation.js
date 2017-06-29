function* doSth1() {
    yield 3;
    yield 4;
}


function* doSth2() {
    yield 1;
    yield 2;

    yield *doSth1();
    //Like
    // yield 3;
    // yield 4;
}

for (let value of doSth2()) {
    console.log(value);
}
// 1
// 2
// 3
// 4
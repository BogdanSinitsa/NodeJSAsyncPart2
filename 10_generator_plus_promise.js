function runAsyncGenerator(generator) {
    let it = generator();
    const onPromiseDone = (data) => {
        let result = it.next(data);
        if (!result.done) {
            result.value.then(onPromiseDone)
        }
    };
    onPromiseDone();
}

function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                item: 'vary important data'
            });
        }, 1000);
    });
}



function* someHandler() {
    let data1 = yield fetchDataAsync();
    console.log('data1', data1);
    // data1 { item: 'vary important data' }

    let data2 = yield fetchDataAsync();
    console.log('data2', data2);
    // data2 { item: 'vary important data' }
}

runAsyncGenerator(someHandler);
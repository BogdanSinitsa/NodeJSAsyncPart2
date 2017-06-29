import co from 'co';

function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                item: 'vary important data'
            });
        }, 1000);
    });
}

co(function* someHandler() {
    let data1 = yield fetchDataAsync();
    console.log('data1', data1);
    // data1 { item: 'vary important data' }

    let data2 = yield fetchDataAsync();
    console.log('data2', data2);
    // data2 { item: 'vary important data' }

    for (let i = 0; i < 3; i++) {
        let data3 = yield fetchDataAsync();
        console.log('data3', data3);
    }
    // data3 { item: 'vary important data' }
    // data3 { item: 'vary important data' }
    // data3 { item: 'vary important data' }

    return '10000000';
}).then(result => {
    console.log('final result', result);
});
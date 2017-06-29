function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                item: 'vary important data'
            });
        }, 1000);
    });
}

async function someHandler() {
    let data1 = await fetchDataAsync();
    console.log('data1', data1);
    // data1 { item: 'vary important data' }

    let data2 = await fetchDataAsync();
    console.log('data2', data2);
    // data2 { item: 'vary important data' }

    for (let i = 0; i < 3; i++) {
        let data3 = await fetchDataAsync();
        console.log('data3', data3);
    }
    // data3 { item: 'vary important data' }
    // data3 { item: 'vary important data' }
    // data3 { item: 'vary important data' }

    return '10000000';
}

someHandler().then(result => {
    console.log('final result', result);
    // final result 10000000
});
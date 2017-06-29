let files = [
    'file 1',
    'file 2',
    [
        'sub_1 file 1',
        'sub_1 file 2',
        'sub_1 file 3',
        [
            'sub_2 file 1',
            'sub_2 file 2',
            'sub_2 file 3',
        ]
    ],
    'file 3',
    [
        'sub_2 file 1',
        'sub_2 file 2',
        'sub_2 file 3',
    ]
];


function* loop(list) {
    for (let item of list) {
        if (item instanceof Array) {
            yield *loop(item)
        } else {
            yield item;
        }
    }
}


for (let file of loop(files)) {
    console.log(file);
}
// file 1
// file 2
// sub_1 file 1
// sub_1 file 2
// sub_1 file 3
// sub_2 file 1
// sub_2 file 2
// sub_2 file 3
// file 3
// sub_2 file 1
// sub_2 file 2
// sub_2 file 3
function* twoPlusTwo() {
    let result = yield 2 + 2;
    console.log(result);
}

let it = twoPlusTwo();

let result = it.next();
console.log(result);
//{ value: 4, done: false }
it.throw(new Error('Invalid expression'));

// /home/bohdan/Projects/NodeJSAsyncPart2/08_throw_middle_exeption.js:4
// let result = yield 2 + 2;
//              ^
//
// Error: Invalid expression
// at Object.<anonymous> (/home/bohdan/Projects/NodeJSAsyncPart2/08_throw_middle_exeption.js:11:10)
// at Module._compile (module.js:570:32)
// at loader (/home/bohdan/Projects/NodeJSAsyncPart2/node_modules/babel-register/lib/node.js:144:5)
// at Object.require.extensions.(anonymous function) [as .js] (/home/bohdan/Projects/NodeJSAsyncPart2/node_modules/babel-register/lib/node.js:154:7)
// at Module.load (module.js:487:32)
// at tryModuleLoad (module.js:446:12)
// at Function.Module._load (module.js:438:3)
// at Module.require (module.js:497:17)
// at require (internal/module.js:20:19)
// at Object.<anonymous> (/home/bohdan/Projects/NodeJSAsyncPart2/index.js:12:1)
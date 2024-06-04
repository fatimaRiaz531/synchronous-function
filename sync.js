"use strict";
// practise: syconus
// call back function:
Object.defineProperty(exports, "__esModule", { value: true });
// practise 1:
const func1 = (callback) => {
    console.log("function one invoked");
    callback();
};
func1(() => console.log("function two invoked"));
// set timeout:
// practise 1:
setTimeout(() => {
    console.log("Second");
}, 3000);
console.log("Third");
function greet(cb) {
    console.log("I'm first");
    cb();
}
greet(() => {
    console.log("Hello");
});

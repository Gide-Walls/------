console.log("A");

setTimeout(() => console.log("B"), 0);//宏任务

Promise.resolve().then(() => console.log("C"));//微任务

console.log("D");
//结果 A D C B微任务比宏任务更加快
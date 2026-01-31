
// // 先定义一个明确的 Date 变量
// const testDate = new Date();
// // 输入 testDate. 后，VS Code 会自动提示 toLocaleString
// console.log(testDate.toLocaleString());

// // 函数里的写法
// function formatTime(time) {
//   const date = new Date(time);
//   // 输入 date. 就有提示
//   return date.toLocaleString();
// }
function formatTime(time){
    return new Date(time).toDateString();

}
console.log(formatTime(Date.now()))

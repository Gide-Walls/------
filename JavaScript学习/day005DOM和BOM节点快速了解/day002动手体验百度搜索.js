// 找到百度首页的搜索输入框（需先打开 https://www.baidu.com）
const input = document.getElementById("kw");
console.log(input);
// 输入文字
input.value = "JavaScript逆向";
// 触发搜索
document.getElementById("su").click();

//localStorage浏览器本地储存
console.log(localStorage)
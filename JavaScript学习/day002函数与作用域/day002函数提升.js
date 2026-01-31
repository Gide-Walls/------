// 先调用函数，再声明函数（函数声明会提升，所以能正常运行）
console.log(add(1,2));
// 函数声明
function add(a,b){
    return a +b;
}

//函数表达式：只有变量名会被提升（值是 undefined），函数体不会，所以调用写在前面会报错。
console.log(abb(2,9));

const abb = function(c,d){
    return c * d;
};
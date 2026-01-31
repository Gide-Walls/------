//函数声明
function greet(name){
    return "hello"+name;
}
console.log(greet("js"));

//函数表达式
const multiply = function(x,y){
    return x*y;
};
console.log(multiply(2,3))

//箭头函数

const square = n => n * n;
console.log(square(5))
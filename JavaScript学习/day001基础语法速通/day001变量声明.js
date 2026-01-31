//let可以改变可重新赋值 块级作用域
let name = "asujyfgd"
name = "sahgdfv"
console.log(name)

//块级作用域  不可重新赋值
const age=18
// age=12
console.log(age)

const user = { name:"我来了"}
// user.name="你是谁"
console.log(user)

//var a 变量提升  值不提升 
console.log(a)
var a=134892765
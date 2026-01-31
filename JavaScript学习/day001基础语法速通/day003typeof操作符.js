console.log(typeof "我爱python")
console.log(typeof 123)
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof [])
console.log(typeof function(){})



//typeof判断数组会有问题显示成object
console.log(typeof [])
//采用另一种判断
console.log(Array.isArray([]))//特殊的记住就好
console.log(Array.isArray([]))
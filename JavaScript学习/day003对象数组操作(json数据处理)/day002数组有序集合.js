const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits[1])

//循环遍历
for (let i =0 ; i < fruits.length ; i++){
    console.log(i,fruits[i])
}

//推荐简单写法
fruits.forEach((item,index)=>{
    console.log(`${index}:${item}`);
});
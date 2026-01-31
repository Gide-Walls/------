const user = {
  name: "Alice",
  age: 25,
  isVip: true,
  address: {
    city: "Beijing",
    zip: "100000"
  }
};
//访问数据两种方法
console.log(user.name)//点语法
console.log(user["age"])//方括号写法


//嵌套对象访问
console.log(user.address.city)

//动态访问
const key="city"
console.log(user.address[key])
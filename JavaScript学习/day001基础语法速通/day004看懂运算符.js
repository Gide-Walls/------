console.log(10+12);//加法
console.log(10%3);//取余
console.log(5 === "5");//严格等于
console.log(5 == "5");//会转换类型
let hasToken = true;
let isExpired=false;
if (hasToken && !isExpired){
    console.log("可以访问")
}
else{
    console.log("拒绝访问")
}


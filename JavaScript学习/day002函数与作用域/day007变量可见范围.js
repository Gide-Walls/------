const globalVar="卡萨帝发几款股份"

const acc = () => {const abb="吉安市电饭锅";
    console.log(globalVar)
    console.log(abb)
}
//先执行函数里面的东西然后函数没返回任何东西返回undefined
console.log(acc())
// console.log(abb)  会报错因为这函数内部 他访问不了



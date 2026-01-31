const data="我爱js"
const selt="12351345"
function genrateSign(data,salt){
    const raw= data + "|" + salt ;
    const sign = raw.length
    return sign

}
console.log(genrateSign())
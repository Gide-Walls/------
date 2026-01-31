const SECRET_SALT="mySecret123";
let page=2;
let data="homepage_data"
let rawSign = data + '_' + page + '_' + SECRET_SALT
if (page>0 && data && SECRET_SALT){
    console.log("校验通过 生成签名")
    let finalSign=rawSign.length;
    console.log(finalSign);

}else{
    console.log("校验失败 缺少必要参数")
}


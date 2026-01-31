const SECRET_SALT="mySecret123";
let page=1;
let data="homepage_data"

let rawSign = data + '_' + page + '_' + SECRET_SALT
console.log(rawSign)
console.log(typeof rawSign)
function fakeEncrypt(data){
    return new Promise(resolve =>{
        setTimeout (()=>{
            const sign =btoa(data);
            resolve(sign);
        },500);
    });
};

async function  names() {
    const datas="asdfkjh";
    console.log("原始数据",datas)
    const sign = await fakeEncrypt(datas)
    console.log(sign)
    
}
names()
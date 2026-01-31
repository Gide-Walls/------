const encode=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('成功了')
    },1000)
})
encode.then(result =>{
    console.log(result)
}).catch((arr)=>{
    console.log(arr)
})
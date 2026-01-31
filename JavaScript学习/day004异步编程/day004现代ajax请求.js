fetch("https://httpbin.org/json").then(response => response.json())
.then(data => {
    console.log("获取的数据",data)
}).catch(err =>{
    console.error("出错了",err)
})
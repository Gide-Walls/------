async function loadDta() {
    try{
        const response =await fetch("https://httpb     in.org/json");
        const data=await response.text();
        console.log("数据",data);
    } catch (error){
        console.error('出错了',error);
    };   
} 
loadDta()
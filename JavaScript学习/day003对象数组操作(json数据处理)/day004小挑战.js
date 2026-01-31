const apiData = {
  status: "ok",
  result: {
    items: [
      { type: "text", content: "明文1", encrypted: false },
      { type: "text", content: "U2FsdGVkX1+...", encrypted: true },
      { type: "image", url: "pic.jpg" },
      { type: "text", content: "U2FsdGVkX1+abc", encrypted: true }
    ],
    meta: {
      count: 4,
      hasEncrypted: true
    }
  }
};
//筛选
const encodeptedItems = apiData.result.items.filter(item =>
    item.type==="text" && item.encrypted === true
);
//循环取出
encodeptedItems.forEach(item =>{
    console.log(item.content);
});

//加密内容数量
console.log(encodeptedItems.length)
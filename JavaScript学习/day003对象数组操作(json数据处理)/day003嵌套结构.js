const response = {
  code: 200,
  msg: "success",
  data: {
    page: 1,
    total: 2,
    list: [
      { id: 101, title: "逆向工程入门", content: "JS 是关键" },
      { id: 102, title: "爬虫进阶", content: "要懂加密" }
    ],
    sign: "e99a18c428cb38d5f260853678922e03"  // 模拟 MD5
  }
};

//循环找出
response.data.list.forEach(text=>{
    console.log(`id: ${text.id}标题: ${text.content}`)
})

//查找特定内容
const titles=response.data.list.map(item => item.title)
console.log(titles)

//合并字符串
const titleStr=titles.join("|")
console.log(titleStr)
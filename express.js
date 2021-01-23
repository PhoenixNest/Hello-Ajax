// 1.引入express
const { json } = require("express");
const express = require("express");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request: 请求报文的封装
// response: 响应报文的封装
// all: 可以接受任意请求
app.get("/", (request, response) => {
  // 设置响应头，使其允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应
  response.send("Hello Express");
});

// Get
app.get("/server", (request, response) => {
  // 设置响应头，使其允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应
  response.send("Hello Express - GET");
});

// Post
// app.post("/server", (request, response) => {
// // 设置响应头，使其允许跨域
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader("Access-Control-Allow-Headers", "*");
// // 设置响应
//   response.send("Hello Express - POST");
// });

// Post
app.all("/server", (request, response) => {
  // 设置响应头，使其允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应
  response.send("Hello Express - POST (ALL)");
});

// Json
app.all("/json-server", (request, response) => {
  // 设置响应头，使其允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应
  response.send("Hello Express - JSON");
  const data = {
    name: "json"
  };

  let jsonData = JSON.stringify(data);
  response.send(jsonData);
});

// IE缓存
app.all("/ie", (request, response) => {
  // 设置响应头，使其允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应
  response.send("Hello Express - IE Cache");
});

// 超时、取消请求
app.all("/delay", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  setTimeout(() => {
    response.send("Hello Express - Timeout");
  }, 3000);

});

// JQuery 服务
app.all("/jquery-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send("Hello Express - JQuery");
  const data = { name: "JQuery Test" };
  response.send(JSON.stringify(data));
});

// Axios 服务
app.all("/axios-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send("Hello Express - JQuery");
  const data = { name: "Axios Test" };
  response.send(JSON.stringify(data));
});

// Fetch 服务
app.all("/fetch-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send("Hello Express - JQuery");
  const data = { name: "Fetch Test" };
  response.send(JSON.stringify(data));
});

// 4.监听端口，启动服务
app.listen(8000, () => {
  console.log("服务已启动，8000端口监听中...");
});
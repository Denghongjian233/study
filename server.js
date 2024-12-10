const express = require("express");
const app = express();

app.get("/sse", (req, res) => {
  // 设置 SSE 必要的响应头
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // 发送心跳，保持连接
  const heartbeat = setInterval(() => {
    res.write("event: ping\ndata: heartbeat\n\n");
  }, 30000);

  // 模拟发送数据
  let count = 0;
  const dataInterval = setInterval(() => {
    count++;
    const data = {
      id: count,
      message: `这是第 ${count} 条消息`,
      timestamp: new Date().toISOString(),
    };

    res.write(`data: ${JSON.stringify(data)}\n\n`);

    if (count >= 10) {
      clearInterval(dataInterval);
      clearInterval(heartbeat);
      res.end();
    }
  }, 1000);

  // 连接关闭时清理定时器
  req.on("close", () => {
    clearInterval(heartbeat);
    clearInterval(dataInterval);
  });
});

function P123() {
  // 解构

  console.log(obj);
  const { a } = obj;
  return function () {
    debugger;
    console.log(a);
  };
}

app.listen(3000, () => {
  console.log("SSE 服务器运行在 3000 端口");
});

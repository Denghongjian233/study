// 基础版本
const eventSource = new EventSource("http://localhost:3000/sse");

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("收到消息:", data);
};

eventSource.onerror = (error) => {
  console.error("SSE 错误:", error);
  eventSource.close();
};

// 带重试机制的增强版本
class SSEClient {
  constructor(url, options = {}) {
    this.url = url;
    this.options = {
      maxRetries: 3,
      retryInterval: 3000,
      ...options,
    };
    this.retryCount = 0;
    this.eventSource = null;
    this.connect();
  }

  connect() {
    this.eventSource = new EventSource(this.url);

    this.eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("收到消息:", data);
      } catch (error) {
        console.error("解析消息失败:", error);
      }
    };

    this.eventSource.onerror = (error) => {
      console.error("连接错误:", error);
      this.eventSource.close();

      if (this.retryCount < this.options.maxRetries) {
        this.retryCount++;
        console.log(
          `尝试重新连接 (${this.retryCount}/${this.options.maxRetries})...`
        );
        setTimeout(() => this.connect(), this.options.retryInterval);
      } else {
        console.error("达到最大重试次数，停止重连");
      }
    };

    this.eventSource.addEventListener("ping", (event) => {
      console.log("收到心跳:", event.data);
    });
  }

  close() {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
  }
}

// 使用增强版客户端
const sseClient = new SSEClient("http://localhost:3000/sse", {
  maxRetries: 5,
  retryInterval: 2000,
});

function googleSearch() {
  const searchTerm = document.getElementById("searchInput").value;
  if (searchTerm.trim() !== "") {
    // 使用 Google 搜索
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      searchTerm
    )}`;
  }
}

function feelingLucky() {
  const searchTerm = document.getElementById("searchInput").value;
  if (searchTerm.trim() !== "") {
    // 使用 Google "手气不错"功能
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      searchTerm
    )}&btnI`;
  }
}

// 添加回车键搜索功能
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      googleSearch();
    }
  });

// 添加鼠标跟随花朵效果
document.addEventListener("mousemove", function (e) {
  // 创建花朵元素
  const flower = document.createElement("img");
  flower.className = "flower";
  flower.src =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGQ0NEOSIgZD0iTTM1IDE5YzAgNi4xLTMuOSAxMS01IDExIC0xLjEgMC01LTQuOS01LTExIDAtNi4xIDMuOS0xMSA1LTExQzMxLjEgOCAzNSAxMi45IDM1IDE5ek0xMSAxOWMwIDYuMS0zLjkgMTEtNSAxMSAtMS4xIDAtNS00LjktNS0xMSAwLTYuMSAzLjktMTEgNS0xMUMxLjEgOCAxMSAxMi45IDExIDE5ek0yMyA3YzYuMSAwIDExIDMuOSAxMSA1IDAgMS4xLTQuOSA1LTExIDUgLTYuMSAwLTExLTMuOS0xMS01QzEyIDEwLjkgMTYuOSA3IDIzIDd6TTIzIDMxYzYuMSAwIDExIDMuOSAxMSA1IDAgMS4xLTQuOSA1LTExIDUgLTYuMSAwLTExLTMuOS0xMS01QzEyIDM0LjkgMTYuOSAzMSAyMyAzMXoiLz48Y2lyY2xlIGZpbGw9IiNGRkFDMzMiIGN4PSIyMyIgY3k9IjE5IiByPSI1Ii8+PC9zdmc+";

  // 设置花朵位置
  flower.style.left = e.clientX + "px";
  flower.style.top = e.clientY + "px";

  // 随机旋转角度
  const rotation = Math.random() * 360;
  flower.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

  // 随机颜色
  const hue = Math.random() * 360;
  flower.style.filter = `hue-rotate(${hue}deg)`;

  // 添加到页面
  document.body.appendChild(flower);

  // 动画结束后移除元素
  flower.addEventListener("animationend", function () {
    flower.remove();
  });
});

// 优化性能：限制花朵生成频率
let lastTime = 0;
const throttle = 50; // 每50毫秒生成一个花朵

document.addEventListener("mousemove", function (e) {
  const currentTime = Date.now();
  if (currentTime - lastTime >= throttle) {
    createFlower(e);
    lastTime = currentTime;
  }
});

function createFlower(e) {
  const flower = document.createElement("img");
  flower.className = "flower";
  flower.src =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGQ0NEOSIgZD0iTTM1IDE5YzAgNi4xLTMuOSAxMS01IDExIC0xLjEgMC01LTQuOS01LTExIDAtNi4xIDMuOS0xMSA1LTExQzMxLjEgOCAzNSAxMi45IDM1IDE5ek0xMSAxOWMwIDYuMS0zLjkgMTEtNSAxMSAtMS4xIDAtNS00LjktNS0xMSAwLTYuMSAzLjktMTEgNS0xMUMxLjEgOCAxMSAxMi45IDExIDE5ek0yMyA3YzYuMSAwIDExIDMuOSAxMSA1IDAgMS4xLTQuOSA1LTExIDUgLTYuMSAwLTExLTMuOS0xMS01QzEyIDEwLjkgMTYuOSA3IDIzIDd6TTIzIDMxYzYuMSAwIDExIDMuOSAxMSA1IDAgMS4xLTQuOSA1LTExIDUgLTYuMSAwLTExLTMuOS0xMS01QzEyIDM0LjkgMTYuOSAzMSAyMyAzMXoiLz48Y2lyY2xlIGZpbGw9IiNGRkFDMzMiIGN4PSIyMyIgY3k9IjE5IiByPSI1Ii8+PC9zdmc+";

  flower.style.left = e.clientX + "px";
  flower.style.top = e.clientY + "px";

  const rotation = Math.random() * 360;
  flower.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

  const hue = Math.random() * 360;
  flower.style.filter = `hue-rotate(${hue}deg)`;

  document.body.appendChild(flower);

  flower.addEventListener("animationend", function () {
    flower.remove();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  // 为每个logo字母添加动画延迟
  const logoSpans = document.querySelectorAll(".logo span");
  logoSpans.forEach((span, index) => {
    span.style.setProperty("--i", index + 1);
  });

  // 搜索功能
  const performSearch = () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      // 这里使用 Google Custom Search API
      // 需要替换为你的 API 密钥和搜索引擎 ID
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchTerm
      )}`;
      window.location.href = searchUrl;
    }
  };

  // 添加事件监听器
  searchButton.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // 添加输入框焦点动画
  searchInput.addEventListener("focus", () => {
    searchInput.parentElement.classList.add("focused");
  });

  searchInput.addEventListener("blur", () => {
    searchInput.parentElement.classList.remove("focused");
  });

  // 添加鼠标跟随花朵效果
  let flowers = [];
  const maxFlowers = 5; // 同时显示的花朵数量

  function createFlower(x, y) {
    const flower = document.createElement("div");
    flower.className = "flower";

    // 创建花瓣
    for (let i = 0; i < 4; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      flower.appendChild(petal);
    }

    flower.style.left = x + "px";
    flower.style.top = y + "px";

    document.body.appendChild(flower);

    // 存储花朵元素
    flowers.push(flower);

    // 如果花朵数量超过最大值，删除最早的花朵
    if (flowers.length > maxFlowers) {
      const oldFlower = flowers.shift();
      oldFlower.remove();
    }

    // 1秒后移除花朵
    setTimeout(() => {
      flower.remove();
      flowers = flowers.filter((f) => f !== flower);
    }, 1000);
  }

  // 添加鼠标移动事件监听器
  let throttleTimer;
  document.addEventListener("mousemove", (e) => {
    if (!throttleTimer) {
      throttleTimer = setTimeout(() => {
        createFlower(e.clientX, e.clientY);
        throttleTimer = null;
      }, 50); // 每50毫秒创建一个新花朵
    }
  });
});

// 当DOM内容加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  // 获取花朵光标元素
  const cursor = document.querySelector(".flower-cursor");
  // 初始化鼠标位置变量
  let mouseX = 0;
  let mouseY = 0;
  // 初始化光标位置变量
  let cursorX = 0;
  let cursorY = 0;
  // 设置缓动系数
  const easing = 0.15;
  // 初始化缩放比例
  let scale = 1;

  // 监听鼠标移动事件
  document.addEventListener("mousemove", (e) => {
    // 更新鼠标位置
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 计算鼠标移动速度并更新缩放比例
    const speed = Math.sqrt(
      Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2)
    );
    scale = 1 + Math.min(speed / 100, 0.5);
  });

  // 动画循环函数
  function animate() {
    // 使用缓动公式计算新位置
    cursorX += (mouseX - cursorX) * easing;
    cursorY += (mouseY - cursorY) * easing;

    // 更新花朵位置
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    // 请求下一帧动画
    requestAnimationFrame(animate);
  }

  // 监听鼠标按下事件
  document.addEventListener("mousedown", () => {
    // 鼠标按下时缩小花朵
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
  });

  // 监听鼠标释放事件
  document.addEventListener("mouseup", () => {
    // 鼠标释放时恢复花朵大小
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });

  // 监听鼠标离开窗口事件
  document.addEventListener("mouseout", () => {
    // 隐藏花朵
    cursor.style.opacity = "0";
  });

  // 监听鼠标进入窗口事件
  document.addEventListener("mouseover", () => {
    // 显示花朵
    cursor.style.opacity = "1";
  });

  // 启动动画
  animate();
});

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState({ top: window.innerHeight - 100, left: window.innerWidth - 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showUpdate, setShowUpdate] = useState(false);
  const ballRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // 确保悬浮球不会超出浏览器边界
      setPosition((prevPos) => ({
        top: Math.min(prevPos.top, window.innerHeight - 60), // 60 是悬浮球的高度
        left: Math.min(prevPos.left, window.innerWidth - 60), // 60 是悬浮球的宽度
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - ballRef.current.getBoundingClientRect().left,
      y: e.clientY - ballRef.current.getBoundingClientRect().top,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      let newLeft = e.clientX - offset.x;
      let newTop = e.clientY - offset.y;

      // 确保悬浮球不会超出窗口边界
      newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - 60)); // 确保左边和右边不会超出
      newTop = Math.max(0, Math.min(newTop, window.innerHeight - 60));  // 确保上边和下边不会超出

      setPosition({ top: newTop, left: newLeft });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  // 计算更新公告的位置，确保不超出视口
  const updateBoxStyle = {
    top: position.top - 100, // 默认公告在悬浮球上方 70px
    left: position.left + 40, // 默认公告居中在悬浮球上方
  };

  // 如果公告会超出视口右侧，调整公告位置
  if (position.left + 180 > window.innerWidth) {
    updateBoxStyle.left = window.innerWidth - 190; // 确保公告不会超出右侧
  }

  // 如果公告会超出视口左侧，调整公告位置
  if (position.left < 10) {
    updateBoxStyle.left = 10; // 确保公告不会超出左侧
  }

  // 如果悬浮球接近底部，确保公告不会超出视口顶部
  if (position.top < 80) {
    updateBoxStyle.top = position.top + 70; // 将公告放在悬浮球下方
  }

  return (
    <div
      className="floating-ball"
      ref={ballRef}
      style={{ top: position.top, left: position.left }}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setShowUpdate(true)}
      onMouseLeave={() => setShowUpdate(false)}
    >
      <div className="ball" />
      {showUpdate && (
        <div className="update-box" style={updateBoxStyle}>
          <p>🔔 Update: New features are available!</p>
        </div>
      )}
    </div>
  );
};

export default App;

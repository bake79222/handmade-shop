// 選取所有 heart-icon
document.querySelectorAll(".heart-icon").forEach(img => {
  img.addEventListener("click", function() {
    // 如果是空心，就換成填滿；反之亦然
    if (this.src.includes("icon-heart.svg")) {
      this.src = "../assets/images/index/icon-heart-fill.svg";
    } else {
      this.src = "../assets/images/index/icon-heart.svg";
    }
  });
});
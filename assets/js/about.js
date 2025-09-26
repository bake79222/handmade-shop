// 取得所有 .year-list 按鈕
const yearButtons = document.querySelectorAll('.year-list');

// 為每個按鈕添加點擊事件監聽器
yearButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 移除所有按鈕上的 .active 類別
    yearButtons.forEach(btn => btn.classList.remove('active'));

    // 將 .active 類別添加到被點擊的按鈕上
    button.classList.add('active');
  });
});


// 取得所有按鈕和內容區塊
const contents = document.querySelectorAll('.timeline-content');

// 為每個按鈕添加點擊事件監聽器
yearButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 移除所有按鈕的 active 類別
    yearButtons.forEach(btn => btn.classList.remove('active'));

    // 將 active 類別加到被點擊的按鈕上
    button.classList.add('active');

    // 隱藏所有內容區塊
    contents.forEach(content => content.classList.add('d-none'));

    // 顯示對應索引的內容區塊
    contents[index].classList.remove('d-none');
  });
});
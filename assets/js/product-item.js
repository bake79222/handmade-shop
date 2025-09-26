 // 獲取圖示元素
    const heartIcon = document.getElementById('heartIcon');

    if (heartIcon) {
        heartIcon.addEventListener('click', function() {
            // 使用 classList.toggle 來切換 class
            // 如果 'bi-heart' 存在就移除，反之則添加
            this.classList.toggle('bi-heart');
            // 如果 'bi-heart-fill' 不存在就添加，反之則移除
            this.classList.toggle('bi-heart-fill');
        });
    }


// 顏色選擇區塊
const colorItems = document.querySelectorAll('#color-options li');

colorItems.forEach(item => {
  item.addEventListener('click', function() {
    // 移除顏色區塊內所有圖片的邊框
    colorItems.forEach(li => {
      const img = li.querySelector('img');
      img.classList.remove('color-box-active');
    });

    // 為當前點擊的圖片添加邊框
    const currentImg = this.querySelector('img');
    currentImg.classList.add('color-box-active');
  });
});

// 規格選擇區塊
const quantityItems = document.querySelectorAll('#quantity-options li');

quantityItems.forEach(item => {
  item.addEventListener('click', function() {
    // 移除規格區塊內所有圖片的邊框
    quantityItems.forEach(li => {
      const img = li.querySelector('img');
      img.classList.remove('quantity-box-active');
    });

    // 為當前點擊的圖片添加邊框
    const quantityCurrentImg = this.querySelector('img');
    quantityCurrentImg.classList.add('quantity-box-active');
  });
});




// 選取主圖片元素
const mainProductImage = document.getElementById('mainProductImage');

// 選取所有規格選項的圖片
const quantityItems2 = document.querySelectorAll('.quantity img');

// 遍歷所有規格圖片並為其添加點擊事件
quantityItems2.forEach(item => {
item.addEventListener('click', function() {
    // 獲取被點擊圖片的 src 屬性
    const newImageSrc = this.src;

    // 替換主圖片的 src 屬性
    mainProductImage.src = newImageSrc;
});
});

// 選取所有需要的元素
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const quantitySpan = document.getElementById('quantity');

// 設定起始數量
let quantity = 1;

// 監聽增加按鈕的點擊事件
increaseBtn.addEventListener('click', () => {
quantity++; // 數量加 1
quantitySpan.textContent = quantity; // 更新 span 內的文字
});

// 監聽減少按鈕的點擊事件
decreaseBtn.addEventListener('click', () => {
// 確保數量不會小於 1
if (quantity > 1) {
    quantity--; // 數量減 1
    quantitySpan.textContent = quantity; // 更新 span 內的文字
}
});


// 選取所有連結元素
const introLinks = document.querySelectorAll('.item-introduction');

// 遍歷所有連結並為其添加點擊事件
introLinks.forEach(link => {
link.addEventListener('click', function(event) {
    // 阻止超連結的預設跳轉行為
    event.preventDefault();

    // 1. 移除所有連結的 active 類別
    introLinks.forEach(item => {
    item.classList.remove('active');
    });

    // 2. 為當前被點擊的連結添加 active 類別
    this.classList.add('active');
});
});


const cardFlow = document.getElementById('cardFlow');

// 設定每次滾動的距離
const scrollDistance = 50; // 你可以根據卡片的寬度調整這個值

// 為右箭頭添加點擊事件，讓容器向右滾動
nextBtn.addEventListener('click', () => {
  cardFlow.scrollLeft += scrollDistance;
});

// 為左箭頭添加點擊事件，讓容器向左滾動
prevBtn.addEventListener('click', () => {
  cardFlow.scrollLeft -= scrollDistance;
});

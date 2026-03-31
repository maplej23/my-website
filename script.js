const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const numCards = cards.length;

// 计算每张卡片之间的角度间隔 (360度除以卡片数量)
const angle = 360 / numCards;

// 计算需要把卡片往外推多远，才能让它们不重叠形成一个圆
// Math.round((210 / 2) / Math.tan(Math.PI / numCards)) + padding;
const radius = 400; 

// 排布卡片
cards.forEach((card, index) => {
  const rotation = angle * index;
  // 给每张卡片设置单独的 3D 位置：旋转对应的角度，然后向外(Z轴)推开
  card.style.transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;
});

// 鼠标拖拽控制旋转的简单逻辑
let isDragging = false;
let startX = 0;
let currentRotation = 0;

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const diffX = e.pageX - startX;
  // 控制旋转的灵敏度，除以5是为了不要转得太快
  const newRotation = currentRotation + (diffX / 5); 
  
  carousel.style.transform = `rotateY(${newRotation}deg)`;
});

document.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  // 保存当前的旋转角度
  const diffX = e.pageX - startX;
  currentRotation += (diffX / 5);
});

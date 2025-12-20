// Custom flower cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
  cursor.style.transform = 'scale(1.3)';
  setTimeout(() => cursor.style.transform = 'scale(1)', 150);
});

// Floating petals animation
function createPetal() {
  const petal = document.createElement('span');
  petal.classList.add('petal');
  petal.textContent = '🌸';
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = 6 + Math.random() * 6 + 's';
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}
setInterval(createPetal, 600);

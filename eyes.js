const balls = document.getElementsByClassName('ball');
const ball2 = document.getElementsByClassName('secondball');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].transform = 'translate(-' + x + ',-' + y + ')';
  ball2[0].style.left = x;
  ball2[0].style.top = y;
  ball2[0].transform = 'translate(-' + x + ',-' + y + ')';
};
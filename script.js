const canvas = document.getElementById('pfpCanvas');
const ctx = canvas.getContext('2d');

const addHatBtn = document.getElementById('addHatBtn');
const scaleSlider = document.getElementById('scaleSlider');
const rotationSlider = document.getElementById('rotationSlider');

let hatImage = new Image();
hatImage.src = './5786e2fc-8c3f-4458-bac7-812ab7159505.png'; // your uploaded hat

let hat = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  scale: 1,
  rotation: 0,
  added: false
};

addHatBtn.addEventListener('click', () => {
  hat.added = true;
  drawCanvas();
});

scaleSlider.addEventListener('input', () => {
  hat.scale = parseFloat(scaleSlider.value);
  drawCanvas();
});

rotationSlider.addEventListener('input', () => {
  hat.rotation = parseInt(rotationSlider.value);
  drawCanvas();
});

canvas.addEventListener('mousedown', (e) => {
  if (!hat.added) return;

  const rect = canvas.getBoundingClientRect();
  hat.x = e.clientX - rect.left;
  hat.y = e.clientY - rect.top;
  drawCanvas();
});

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (hat.added) {
    ctx.save();
    ctx.translate(hat.x, hat.y);
    ctx.rotate((hat.rotation * Math.PI) / 180);
    ctx.scale(hat.scale, hat.scale);
    ctx.drawImage(hatImage, -hatImage.width / 2, -hatImage.height / 2);
    ctx.restore();
  }
}

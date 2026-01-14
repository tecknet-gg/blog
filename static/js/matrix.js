const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height, cols, rows;
const RES = 12;
const SCALE = 0.05; 
const SPEED = 0.003;
const COLOR_SPEED = 0.01; 

let zTime = 0;
let colorTime = 0;

// Permutation table for Perlin Noise
const p = new Uint8Array(512);
for (let i = 0; i < 256; i++) p[i] = p[i + 256] = Math.floor(Math.random() * 256);

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerp(t, a, b) { return a + t * (b - a); }
function grad(hash, x, y, z) {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

function noise(x, y, z) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
  x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
  const u = fade(x), v = fade(y), w = fade(z);
  const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z;
  const B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
  return lerp(w,
    lerp(v, lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)),
            lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z))),
    lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1)),
            lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1)))
  );
}

function lerpColor(c1, c2, t) {
  return {
    r: Math.floor(c1.r + (c2.r - c1.r) * t),
    g: Math.floor(c1.g + (c2.g - c1.g) * t),
    b: Math.floor(c1.b + (c2.b - c1.b) * t)
  };
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  width = canvas.width;
  height = canvas.height;
  cols = Math.ceil(width / RES);
  rows = Math.ceil(height / RES);
  
  ctx.font = `bold ${RES}px Helvetica`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
}

window.addEventListener('resize', resize);
resize();

function draw() {
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = 'rgb(0, 0, 0)'; 
  ctx.fillRect(0, 0, width, height);

  const orange = { r: 255, g: 136, b: 31 };
  const blue = { r: 46, g: 31, b: 255 };

  const shift = (Math.sin(colorTime) + 1) / 2;
  const currentTopLeft = lerpColor(blue, orange, shift);
  const currentBottomRight = lerpColor(orange, blue, shift);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * RES;
      const y = j * RES;
      
      const n = noise(i * SCALE, j * SCALE, zTime);
      const char = n > 0 ? "0" : "1";
      
      const t = (x / width + y / height) / 2;
      const baseColor = lerpColor(currentTopLeft, currentBottomRight, t);

      const brightness = 0.3 + ((n + 1) / 2) * 0.7;

      const r = Math.floor(baseColor.r * brightness);
      const g = Math.floor(baseColor.g * brightness);
      const b = Math.floor(baseColor.b * brightness);

      ctx.globalAlpha = 0.8;
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillText(char, x, y);
    }
  }
  
  zTime += SPEED;
  colorTime += COLOR_SPEED;
  requestAnimationFrame(draw);
}

draw();
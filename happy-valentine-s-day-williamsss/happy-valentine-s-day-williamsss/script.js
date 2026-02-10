let unlocked = {
  why: false,
  endure: false,
  final: false
};

function goToScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');
}

function unlock(key) {
  unlocked[key] = true;
  if (unlocked.why && unlocked.endure && unlocked.final) {
    document.getElementById('secretBtn').classList.remove('hidden');
  }
}

function createChaos(id) {
  const container = document.getElementById(id);
  const emojis = ['💘','✨','💥','💖','⭐','🐸','🐱','🦄','🌈'];
  

  for (let i = 0; i < 70; i++) {
    const span = document.createElement('span');
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = (5 + Math.random() * 10) + 's';
    container.appendChild(span);
  }
}

createChaos('chaos1');
createChaos('chaos2');
function chaosGifs(screenId, gifs, amount) {
  const screen = document.getElementById(screenId);

  for (let i = 0; i < amount; i++) {
    const img = document.createElement("img");
    img.src = gifs[Math.floor(Math.random() * gifs.length)];
    img.className = "floating-gif";
    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = (4 + Math.random() * 4) + "s";
    screen.appendChild(img);
  }
}

/* GIF VALENTINE CAOTICHE (puoi cambiarle) */
const valentineGifs = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHRyemRhdG5tODVuMGMxcTFid3NqbTd4aGtvZjE1bmc1bjZpZGg0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHl5d3N0Yzd4N3F3dHlhNDV2YWN3Ymt1cmk1cm5oMWplN20xd3h3NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wvYNSqBAMDVx8CEYkt/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGpudHRpaGsxbzBnYXl4YmI1cnVuNTdtbGpheG85amNzbWo0czF1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LbC9yf16pIS74lXTDc/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVtdzBleGFld2cwbmwyeGNzbzhhanVyZ3dwZnJmNDZndTVhdGF5OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0COHL41w23IqRwyc/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVtdzBleGFld2cwbmwyeGNzbzhhanVyZ3dwZnJmNDZndTVhdGF5OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0COHL41w23IqRwyc/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExenRpZHNlZXMydWNvamtvZmFrbDVnYzg4YXJ1dXZlZ2pkbjBhZm05bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GDlw1qnt6mQS5ulGfe/giphy.gif",
   "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXl4YmYydGt2bGtyYWRpbW5qODU3cnJ0bGRyZm41cm40Y213a3FmayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ltGJldQh48VZtfVgfB/giphy.gif"
];

/* Caos medio */
chaosGifs("screen2", valentineGifs, 10);
chaosGifs("screen3", valentineGifs, 10);
chaosGifs("screen4", valentineGifs, 10);

/* Caos FINALE */
chaosGifs("screen5", valentineGifs, 22);

function spawnHearts(screenId, intensity = 1) {
  const container = document.querySelector(
    `#${screenId} .hearts-container`
  );

  if (!container) return;

  const hearts = ["💖","💘","💗","💞","❤️","💓","💥","🦄","🌈","✨","🐱","🐶"];


  setInterval(() => {
    for (let i = 0; i < intensity; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";
      heart.style.fontSize = 1.5 + Math.random() * 3 + "rem";

      container.appendChild(heart);

      setTimeout(() => heart.remove(), 6000);
    }
  }, 300);
}
// Schermata 3 – caotica ma leggibile
spawnHearts("screen3", 1);

// Schermata 4 – più caos
spawnHearts("screen4", 5);

// Schermata 5 – ESAGERATA, overdose di San Valentino
spawnHearts("screen5", 20);
function heartExplosion(x, y, amount = 20) {
  const layer = document.querySelector("#screen5 .explosion-layer");
  if (!layer) return;

  const hearts = ["💖","💘","💗","💞","❤️","💓","💥","🦄","🌈","✨","🐱","🐶"];


  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.className = "exploding-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 200;

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

    layer.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  heartExplosion(x, y, 40);
}, 600);

document.addEventListener("DOMContentLoaded", () => {

  const screen6 = document.getElementById("screen6");
  const paradiseLayer = screen6.querySelector(".paradise-layer");

  // --- ANGELI ---
  const angelUrls = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHM2aHk4emhxanF6bmFhYzAyNXQ3dTc1eWN4YzRjYmhjcHA0cjZkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Uw5u1LRJJIGBn3pS1p/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczhqcTRnZDM1NG81M3RsYzV2dHl2OWcxdXh5eWs4YzM0M2M1MnZobSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ofaHcdqrXfRPM7BYhv/giphy.gif"
  ];
  for (let i = 0; i < 6; i++) {
    const angel = document.createElement("img");
    angel.src = angelUrls[i % angelUrls.length];
    angel.className = "angel";
    angel.style.left = (10 + i * 15) + "vw";
    angel.style.animationDelay = i * 1.5 + "s";
    paradiseLayer.appendChild(angel);
  }

  // --- CUORI LEGGERI CADENTI ---
  function gentleHearts() {
    const heart = document.createElement('div');
    heart.className = 'gentle-heart';
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-2rem';
    heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    paradiseLayer.appendChild(heart);
    setTimeout(() => {
      heart.style.top = '110vh';
      heart.style.opacity = 0;
      setTimeout(() => heart.remove(), 15000);
    }, 50);
  }
  setInterval(gentleHearts, 300);

  // --- STELLINE SPARKLE ---
  function spawnSparkles() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    paradiseLayer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 15000);
  }
  setInterval(spawnSparkles, 400);

  // --- ESPLOSIONE CUORI AL CLICK ---
  screen6.addEventListener("click", (e) => {
    const hearts = ["💖","💘","💗","💞","❤️","💓"];
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("div");
      heart.className = "exploding-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 100;
      heart.style.left = e.clientX + "px";
      heart.style.top = e.clientY + "px";
      heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
      heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

      paradiseLayer.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    }
  });

});

// ======= AUDIO PER OGNI SCHERMATA =======
const screenAudios = {
  1: new Audio("https://dl.dropboxusercontent.com/scl/fi/wq81tckiyluqwp74v8x7i/Haddaway-What-is-love-low-quality.mp3?rlkey=r4qbdzra5sg06xq50zt3get1c&st=45yexods&dl=0"), // esempio tranquillo
  2: new Audio("https://dl.dropboxusercontent.com/scl/fi/k3qatp34f89xdetpcaa2d/funky-town-low-quality-fish.mp3?rlkey=bsypuuas8jnnb0xo1luy0foqx&st=y6xqku5j&dl=0"), // Funkytown meme (tuo)
  3: new Audio("https://dl.dropboxusercontent.com/scl/fi/fhtebifxxf9pg5o5ga3is/spinning-rat.mp3?rlkey=prk3cm68l4a7k1wd2npdm2qks&st=ff2g2cpp&dl=033"), // demo (puoi cambiare)
  4: new Audio("https://dl.dropboxusercontent.com/scl/fi/jwsq9mx0xrqmlhtqh5kmb/shape-of-you-but-its-low-quality.mp3?rlkey=gy9720wy7ecmx98jwzbbfvvt5&e=1&st=kwf54u5p&dl=0"), // demo
  5: new Audio("https://dl.dropboxusercontent.com/scl/fi/xno0nwror0cbfz6os104s/We-are-Charlie-Kirk-Phonk-Remix.mp3?rlkey=huoz3iktsa2aui4b15470w3xz&st=vdvujo56&dl=0"), // demo
  6: new Audio("https://dl.dropboxusercontent.com/scl/fi/0lbrygt56fmvtq0d513ja/Adiemus-Enya-Madre-Natura-Sigla-Ciao-Darwin-OLA.it.mp3?rlkey=1ssj2ab3o3w5rtelz4ldqk2w5&st=6hcwzal1&dl=0")  // demo
};

// Imposta volume e loop (se vuoi loop)
for (let key in screenAudios) {
  screenAudios[key].volume = 0.4;
  screenAudios[key].loop = true;
}

// Funzione per fermare tutti gli audio
function stopAllScreenAudio() {
  for (let key in screenAudios) {
    screenAudios[key].pause();
    screenAudios[key].currentTime = 0;
  }
}

// Sovrascrive goToScreen senza modificare il tuo resto
const originalGoToScreen = goToScreen;
goToScreen = function(n) {
  // stop audio precedente
  stopAllScreenAudio();

  // chiama la tua funzione originale
  originalGoToScreen(n);

  // parte l’audio della schermata attuale
  if (screenAudios[n]) {
    screenAudios[n].play().catch(err => {
      console.log("Audio bloccato finché non clicchi (serve interazione utente)", err);
    });
  }
};

// --- BOTTONE INIZIALE ---
document.getElementById("enterChaosBtn").addEventListener("click", () => {
    // Riproduce l'audio della schermata 1
    let audio1 = new Audio("LINK_DIRETTO_AL_TUO_MP3.mp3");
    audio1.play();

    // Mostra la schermata 1 usando il tuo JS esistente
    goToScreen(1);

    // Nasconde il bottone iniziale
    document.getElementById("startScreen").style.display = "none";
});
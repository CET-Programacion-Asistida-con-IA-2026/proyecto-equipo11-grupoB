// ── SONIDO AL HACER CLICK ────────────────────────────────────────
// Genera un pequeño "click" con la Web Audio API (no necesita
// ningún archivo de audio externo).

let audioCtx = null;

function reproducirClick() {
  // El AudioContext se crea recién en el primer click, porque los
  // navegadores no permiten reproducir audio antes de una interacción
  // del usuario.
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  const oscilador = audioCtx.createOscillator();
  const volumen = audioCtx.createGain();

  oscilador.type = "sine";
  oscilador.frequency.setValueAtTime(700, audioCtx.currentTime);

  // Sube el volumen bruscamente y lo apaga rápido, para que suene
  // como un "click" cortito y no como un pitido largo.
  volumen.gain.setValueAtTime(0.15, audioCtx.currentTime);
  volumen.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

  oscilador.connect(volumen);
  volumen.connect(audioCtx.destination);

  oscilador.start();
  oscilador.stop(audioCtx.currentTime + 0.1);
}

// Se escucha en todo el documento, así suena en cualquier click
// (botones, links, posts, indicadores, etc.).
document.addEventListener("click", reproducirClick);


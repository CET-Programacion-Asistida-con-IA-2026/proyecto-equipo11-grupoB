// ── CARRUSEL CON EFECTO ZOOM ──────────────────────────────────────

const posts       = document.querySelectorAll('.post');
const indicadores = document.querySelectorAll('.indicador');
const contadorActual = document.getElementById('contador-actual');
const total       = posts.length;
let actual        = 0;
let animando      = false;

function irA(nuevo) {
  if (animando || nuevo === actual) return;
  animando = true;

  const postSaliente = posts[actual];
  const postEntrante = posts[nuevo];

  // 1. El post actual comienza a salir (se reduce y se desvanece)
  postSaliente.classList.add('saliendo');
  postSaliente.classList.remove('activo');

  // 2. El post nuevo entra desde escala grande y se va a su lugar
  postEntrante.classList.add('entrando');

  // Forzar reflow para que la transición de "entrando" arranque desde el estado inicial
  postEntrante.getBoundingClientRect();

  // 3. Aplicar la clase activo en el siguiente frame para disparar la animación
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      postEntrante.classList.remove('entrando');
      postEntrante.classList.add('activo');
    });
  });

  // 4. Limpiar después de que terminen las transiciones (0.5s)
  setTimeout(function() {
    postSaliente.classList.remove('saliendo');
    // Cerrar pista del post que salió
    postSaliente.querySelector('.post-pista').style.display = 'none';
    animando = false;
  }, 500);

  // Actualizar indicadores y contador
  indicadores[actual].classList.remove('activo');
  indicadores[nuevo].classList.add('activo');
  actual = nuevo;
  contadorActual.textContent = actual + 1;
}

// Botones anterior / siguiente
document.getElementById('btn-prev').addEventListener('click', function() {
  irA((actual - 1 + total) % total);
});

document.getElementById('btn-next').addEventListener('click', function() {
  irA((actual + 1) % total);
});

// Puntos indicadores
indicadores.forEach(function(ind) {
  ind.addEventListener('click', function() {
    irA(parseInt(this.getAttribute('data-idx')));
  });
});

// ── PISTAS AL HACER CLIC EN EL POST ──────────────────────────────

posts.forEach(function(post) {
  post.addEventListener('click', function() {
    const pista = this.querySelector('.post-pista');
    if (pista.style.display === 'block') {
      pista.style.display = 'none';
    } else {
      pista.style.display = 'block';
    }
  });
});

// ── SCROLL SUAVE ──────────────────────────────────────────────────

document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const destino = document.querySelector(href);
      if (destino) destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
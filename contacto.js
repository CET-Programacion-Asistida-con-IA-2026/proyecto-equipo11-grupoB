// ── SCROLL SUAVE (menú de navegación) ─────────────────────────────
// Se deja acá también porque contacto.html ahora tiene su propio <nav>

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

// ── FORMULARIO DE CONTACTO ───────────────────────────────────────
// Este archivo se usa SOLO en contacto.html

const formulario = document.getElementById("formFake");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const link = document.getElementById("link").value;
    const red = document.getElementById("redSocial").value;
    const descripcion = document.getElementById("descripcion").value;

    if(link === "" || red === "" || descripcion === ""){

        respuesta.innerHTML = `
            <p class="error">
                ⚠️ Completá todos los campos obligatorios.
            </p>
        `;
     } else{

    respuesta.innerHTML = `
        <div class="mensaje-ok">
            <h3>✅ ¡Gracias por compartir esta publicación!</h3>

            <p>
            Antes de compartir cualquier noticia recordá:
            </p>

            <ul>
                <li>✔ Verificar la fuente.</li>
                <li>✔ Buscar si otros medios hablan del tema.</li>
                <li>✔ Leer la nota completa.</li>
                <li>✔ Revisar la fecha de publicación.</li>
            </ul>
        </div>
    `;

    formulario.reset();
}

});

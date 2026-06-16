const post = document.querySelector('.post');
const pista = document.querySelector('.post-pista');

post.addEventListener('click', function() {
  if (pista.style.display === 'block') {
    pista.style.display = 'none';
  } else {
    pista.style.display = 'block';
  }
});

document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const destino = document.querySelector(href);
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
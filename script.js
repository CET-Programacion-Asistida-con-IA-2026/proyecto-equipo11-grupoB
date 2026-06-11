const post = document.querySelector('.post');
const pista = document.querySelector('.post-pista');

post.addEventListener('click', function() {
  if (pista.style.display === 'block') {
    pista.style.display = 'none';
  } else {
    pista.style.display = 'block';
  }
});
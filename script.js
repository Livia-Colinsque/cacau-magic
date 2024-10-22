const imagemPrincipal = document.getElementById('imagem-principal');
const miniaturas = document.querySelectorAll('.miniatura');
miniaturas.forEach(miniatura => {
miniatura.addEventListener('click', function() {
const novaImage = this.getAttribute('data-image');
imagemPrincipal.src = novaImage;
  });
});

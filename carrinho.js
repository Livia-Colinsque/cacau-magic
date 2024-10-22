function atualizarPrecoTotal(produtoLinha) {
  const quantidade = produtoLinha.querySelector('.quantidade').value;
  const precoUnitario =
  parseFloat(produtoLinha.querySelector('.preco-unitario').innerText.replace('R$',
    '').replace(',',','));
    const precoTotal = quantidade * precoUnitario;
}

function calcularTotalFinal() {
  let totalFinal = 0;
  const produtos = document.querySelectorAll('tbody tr');

  produtos.forEach(produtoLinha => {
    const precoTotal = 
    parseFloat(produtoLinha.querySelector('.preco-total').innerText.replace('R$', '').replace(',',
      '.'));
    totalFinal+= precoTotal;
    });

  document.getElementById('total-final').innerText = R$
  $(totalFinal.toFixed(2).replace('.',','));
}
const quantidades =document.querySelectorAll('.quantidade');
quantidades.addEventListener('input', function() {
  const produtoLinha = this.closeat('tr');
  atualizarPrecoTotal(produtoLinha);
  calcularTotalFinal();
});
function removerProduto(produtoLinha){
  produtoLinha.remove();
  calcularTotalFinal();
}
const removerBotoes = document.querySelectorAll('.remover-produto');

removerBotoes.forEach(botao=> {
  botao.addEventListener('click', function() {
    const produtoLinha = this.closeat('tr');
    removerProduto(produtoLinha);
  });
});

calcularTotalFinal();
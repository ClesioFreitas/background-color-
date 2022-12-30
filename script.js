//  função báscia
const mudaBg = document.getElementById('muda-bg');
const buttonCor = document.querySelectorAll('.divisoria button');
const escolherCor = document.getElementById('escolher-cor');
const btnCor = document.getElementById('btn-cor');
const limparInput = document.getElementById('limpar-input');

function buscarCor(cor) {
  const valor = cor.value;
  const tam = valor.length;

  if (tam === 0) {
    alert('Informe o valor corretamente...');
    escolherCor.focus();
    return;
  }

  if (tam === 6) {
    mudaBg.style.backgroundColor = `#${valor}`;
  } else {
    mudaBg.style.backgroundColor = `${valor}`;
  }
}

btnCor.addEventListener('click', () => {
  buscarCor(escolherCor);
});

escolherCor.addEventListener('keypress', function (tecla) {
  if (tecla.keyCode === 13) {
    buscarCor(escolherCor);
  }
});

limparInput.addEventListener('click', () => {
  location.reload();
});

buttonCor.forEach((btn) => {
  btn.addEventListener('click', () => {
    const cor = btn.getAttribute('class');
    mudaBg.style.backgroundColor = `${cor}`;
    escolherCor.value = '';
    return;
  });
});

// Array para armazenar os nomes das pessoas que curtiram
let curtidores = [];

function curtir() {
  // Pegar o nome digitado no campo de texto
  let nome = document.getElementById('nome').value.trim();

  // Verifica se o nome não está vazio e se já não está na lista
  if (nome && !curtidores.includes(nome)) {
    // Adiciona o nome ao array de curtidores
    curtidores.push(nome);
  }

  // Atualiza o parágrafo com base na quantidade de curtidores
  let curtidasTexto = document.getElementById('curtidas');
  
  if (curtidores.length === 0) {
    curtidasTexto.innerText = "Ninguém curtiu";
  } else if (curtidores.length === 1) {
    curtidasTexto.innerText = `${curtidores[0]} curtiu`;
  } else if (curtidores.length === 2) {
    curtidasTexto.innerText = `${curtidores[0]} e ${curtidores[1]} curtiram`;
  } else {
    curtidasTexto.innerText = `${curtidores[0]}, ${curtidores[1]} e mais ${curtidores.length - 2} pessoas curtiram`;
  }

  // Limpa o campo de texto
  document.getElementById('nome').value = '';
}

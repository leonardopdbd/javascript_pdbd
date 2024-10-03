// Mudar o texto do título
document.getElementById("titulo").textContent = "Novo Título";

// Alterar o estilo dos itens da lista
let itensLista = document.querySelectorAll("#lista li");
itensLista.forEach(function(item) {
    item.style.color = "red";
    item.style.fontSize = "20px";
});

// Adicionar uma classe a todos os parágrafos
let paragrafos = document.querySelectorAll("p");
paragrafos.forEach(function(paragrafo) {
    paragrafo.classList.add("paragrafo-estilizado");
});

// Alterar o texto do botão
document.getElementById("meu-botao").textContent = "Texto do Botão Alterado";

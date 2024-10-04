// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
  // Pega a descrição do campo de texto
  let descricao = document.getElementById('descricaoTarefa').value.trim();

  // Verifica se a descrição não está vazia
  if (descricao) {
    // Cria um objeto tarefa com descrição e status (não concluída por padrão)
    let novaTarefa = {
      descricao: descricao,
      status: false // false = não concluída
    };

    // Adiciona a nova tarefa ao array
    tarefas.push(novaTarefa);

    // Limpa o campo de texto
    document.getElementById('descricaoTarefa').value = '';

    // Atualiza a lista de tarefas na tela
    renderizarTarefas();
  }
}

// Função para renderizar a lista de tarefas
function renderizarTarefas() {
  let lista = document.getElementById('listaTarefas');
  
  // Limpa a lista atual
  lista.innerHTML = '';

  // Percorre as tarefas e cria os elementos para cada uma
  tarefas.forEach((tarefa, index) => {
    // Cria um item de lista <li>
    let item = document.createElement('li');
    
    // Define a classe do item baseado no status da tarefa
    item.className = tarefa.status ? 'concluida' : 'nao-concluida';

    // Cria o checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    
    // Adiciona um evento para alterar o status da tarefa quando o checkbox for clicado
    checkbox.addEventListener('change', () => {
      alterarStatus(index);
    });

    // Cria um texto para a descrição da tarefa
    let texto = document.createTextNode(tarefa.descricao);

    // Adiciona o checkbox e o texto ao item da lista
    item.appendChild(checkbox);
    item.appendChild(texto);

    // Adiciona o item ao <ul>
    lista.appendChild(item);
  });
}

// Função para alterar o status de uma tarefa
function alterarStatus(index) {
  // Inverte o status da tarefa (de não concluída para concluída e vice-versa)
  tarefas[index].status = !tarefas[index].status;

  // Re-renderiza a lista de tarefas para refletir a mudança
  renderizarTarefas();
}

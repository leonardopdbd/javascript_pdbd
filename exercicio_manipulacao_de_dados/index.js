// Função para renderizar a lista de curtidas
function atualizarListaCurtidas() {
    const curtidas = JSON.parse(localStorage.getItem('curtidas')) || [];
    const resultado = document.getElementById('resultado');
    
    if (curtidas.length === 0) {
      resultado.textContent = 'Ninguém curtiu';
    } else if (curtidas.length === 1) {
      resultado.textContent = `${curtidas[0]} curtiu`;
    } else if (curtidas.length === 2) {
      resultado.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
      resultado.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} pessoas curtiram`;
    }
  }
  
  // Adicionar curtir
  document.getElementById('curtirBtn').addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim();
    if (nome) {
      let curtidas = JSON.parse(localStorage.getItem('curtidas')) || [];
      if (!curtidas.includes(nome)) {
        curtidas.push(nome);
        localStorage.setItem('curtidas', JSON.stringify(curtidas));
        atualizarListaCurtidas();
      }
      document.getElementById('nome').value = '';  // Limpar o campo de texto
    }
  });
  
  // Limpar curtidas
  document.getElementById('limparBtn').addEventListener('click', () => {
    localStorage.removeItem('curtidas');
    atualizarListaCurtidas();
  });
  
  // Atualizar a lista de curtidas ao carregar a página
  atualizarListaCurtidas();
  
  // Função para renderizar a lista de tarefas
  function atualizarListaTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';  // Limpa a lista antes de renderizar
  
    tarefas.forEach((tarefa, index) => {
      const li = document.createElement('li');
      
      // Criar o checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = tarefa.status;
      checkbox.addEventListener('change', () => {
        tarefas[index].status = checkbox.checked;
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
      });
  
      // Texto da tarefa
      const texto = document.createTextNode(tarefa.descricao);
  
      // Botão de excluir
      const botaoExcluir = document.createElement('button');
      botaoExcluir.textContent = 'Excluir';
      botaoExcluir.addEventListener('click', () => {
        tarefas.splice(index, 1);  // Remove a tarefa do array
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        atualizarListaTarefas();
      });
  
      li.appendChild(checkbox);
      li.appendChild(texto);
      li.appendChild(botaoExcluir);
      listaTarefas.appendChild(li);
    });
  }
  
  // Adicionar tarefa
  document.getElementById('adicionarTarefaBtn').addEventListener('click', () => {
    const descricao = document.getElementById('descricaoTarefa').value.trim();
    if (descricao) {
      const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
      tarefas.push({ descricao, status: false });  // Adiciona a nova tarefa com status falso (não concluída)
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      atualizarListaTarefas();
      document.getElementById('descricaoTarefa').value = '';  // Limpar campo de texto
    }
  });
  
  // Atualizar lista de tarefas ao carregar a página
  atualizarListaTarefas();
  
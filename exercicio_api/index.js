// ---------- Busca de usuários no GitHub ---------- //

document.getElementById('searchBtn').addEventListener('click', () => {
    const searchUser = document.getElementById('searchUser').value.trim();
    
    if (searchUser) {
      fetch(`https://api.github.com/search/users?q=${searchUser}`)
        .then(response => response.json())
        .then(data => {
          const userList = document.getElementById('userList');
          userList.innerHTML = '';  // Limpar a lista de usuários
  
          if (data.items && data.items.length > 0) {
            data.items.forEach(user => {
              const li = document.createElement('li');
              li.innerHTML = `
                <img src="${user.avatar_url}" alt="${user.login}" />
                <span>${user.login}</span>
              `;
              userList.appendChild(li);
            });
          } else {
            userList.innerHTML = '<li>Não foram encontrados usuários para esta pesquisa.</li>';
          }
        })
        .catch(err => console.error(err));
    }
  });
  
  // ---------- Feed Social ---------- //
  
  const feed = [];
  const feedList = document.getElementById('feedList');
  
  // Função para adicionar uma postagem no feed
  function adicionarPostagem(post) {
    const li = document.createElement('li');
    li.classList.add('feed-item');
    
    li.innerHTML = `
      <div class="feed-item-header">
        <img src="${post.avatar}" alt="${post.username}">
        <span>${post.username}</span>
      </div>
      <div class="feed-item-text">${post.text}</div>
      <img src="${post.catImage}" alt="Imagem de gatinho" />
      <div class="feed-item-footer">
        <button class="like-btn">Curtir <span>${post.likes}</span></button>
      </div>
    `;
  
    // Lógica para curtir a postagem
    const likeBtn = li.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
      post.likes += 1;
      likeBtn.querySelector('span').textContent = post.likes;
    });
  
    feedList.insertBefore(li, feedList.firstChild);
  }
  
  // Função para buscar imagem de gatinho
  function buscarImagemDeGato() {
    return fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => data[0].url)
      .catch(err => console.error(err));
  }
  
  // Função para buscar um usuário aleatório
  function buscarUsuarioAleatorio() {
    return fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        return {
          username: `${user.name.first} ${user.name.last}`,
          avatar: user.picture.medium
        };
      })
      .catch(err => console.error(err));
  }
  
  // Evento de submissão do formulário de postagem
  document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = document.getElementById('postText').value.trim();
    
    if (text) {
      const user = await buscarUsuarioAleatorio();  // Busca usuário aleatório
      const post = {
        username: user.username,
        avatar: user.avatar,
        text: text,
        catImage: await buscarImagemDeGato(),
        likes: 0,
        date: new Date()
      };
  
      feed.push(post);
      adicionarPostagem(post);
      
      // Limpar o campo de texto
      document.getElementById('postText').value = '';
    }
  });
  
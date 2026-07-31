const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  menuBtn.setAttribute('aria-expanded', aberto);
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('aberto'));
});

function criarAcordeao(lista, destinoId, campoTexto) {
  const destino = document.getElementById(destinoId);
  destino.innerHTML = lista.map((item, i) => `
    <article class="item">
      <button type="button" aria-expanded="false">
        <span>${item.titulo}</span><span>+</span>
      </button>
      <div class="item-conteudo">${item[campoTexto]}</div>
    </article>
  `).join('');

  destino.querySelectorAll('.item button').forEach(botao => {
    botao.addEventListener('click', () => {
      const item = botao.closest('.item');
      const aberto = item.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto);
      botao.lastElementChild.textContent = aberto ? '−' : '+';
    });
  });
}

document.getElementById('encontro-titulo').textContent = encontro.titulo;
document.getElementById('encontro-conteudo').innerHTML = `
  <div class="info-encontro">
    <p><strong>Data:</strong> ${encontro.data}</p>
    <p><strong>Intenção:</strong> ${encontro.intencao}</p>
  </div>
  <div class="bloco-meditacao">
    <strong>Meditação</strong>
    <p>${encontro.meditacao}</p>
  </div>
`;

criarAcordeao(oracoes, 'lista-oracoes', 'texto');
criarAcordeao(musicas, 'lista-musicas', 'letra');

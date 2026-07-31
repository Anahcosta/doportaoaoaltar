const menuBtn=document.querySelector('.menu-btn');const menu=document.querySelector('#menu');
menuBtn.addEventListener('click',()=>{const a=menu.classList.toggle('aberto');menuBtn.setAttribute('aria-expanded',a)});
document.querySelectorAll('nav a').forEach(l=>l.addEventListener('click',()=>menu.classList.remove('aberto')));
function criarAcordeao(lista,destinoId,campoTexto){
 const destino=document.getElementById(destinoId);
 destino.innerHTML=lista.map(item=>`<article class="item"><button type="button" aria-expanded="false"><span>${item.titulo}</span><span>+</span></button><div class="item-conteudo">${item.imagem?`<img class="imagem-misterios" src="${item.imagem}" alt="${item.titulo}">`:''}${item[campoTexto]||''}</div></article>`).join('');
 destino.querySelectorAll('.item button').forEach(b=>b.addEventListener('click',()=>{const i=b.closest('.item');const a=i.classList.toggle('aberto');b.setAttribute('aria-expanded',a);b.lastElementChild.textContent=a?'−':'+'}));
}
document.getElementById('encontro-conteudo').innerHTML=`<div class="info-encontro"><p><strong>Data:</strong> ${encontro.data}</p></div><div class="bloco-meditacao"><strong>Meditação</strong><p>${encontro.meditacao}</p></div>`;
criarAcordeao(oracoes,'lista-oracoes','texto');criarAcordeao(musicas,'lista-musicas','letra');

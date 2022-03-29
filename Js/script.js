// Cards dos conhecimentos

const listaSelecao = document.querySelectorAll('.card')
const textCard = document.querySelectorAll('.card-text')

listaSelecao.forEach(card =>{
  card.addEventListener('mouseover', () => {

    const idSelecionado = card.attributes.id.value

    const cardParaAbrir = document.getElementById('card-'+ idSelecionado)
    cardParaAbrir.classList.add('aberto')

    const cardSelecionado = document.getElementById(idSelecionado)
    cardSelecionado.classList.add('ativo')
  });
  card.addEventListener('mouseout', () => {
    const cardAberto = document.querySelector('.aberto')
    cardAberto.classList.remove('aberto')

    const cardAtivoNaListagem = document.querySelector('.ativo')
    cardAtivoNaListagem.classList.remove('ativo')
  });
})

// Navbar mobile

document.querySelector(".bars-mobile").addEventListener("click", () =>
    document.querySelector(".mob").classList.toggle("show-menu")
);

// Scrollbar 

$(function() {
  $('nav a').click(function() {
    var href = $(this).attr("href");
    var offSetTop = $(href).offset().top;

    $('html, body').animate({'scrollTop':offSetTop},)
    
    return false;
  })
})
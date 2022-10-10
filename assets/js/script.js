//Botões
const sobreMim = document.querySelector('#sobreMimBtn')
const carreira = document.querySelector('#carreiraBtn')
const habilidades = document.querySelector('#habilidadesBtn')
const encerramento = document.querySelector('#encerramentoBtn')

//Elementos
const wpp = document.querySelector('.wpp')
const main = document.querySelector('.main')
const foto = document.querySelector('.foto')
const card = document.querySelectorAll('#carreira, #habilidades, #encerramento')
const divBotoes = document.querySelector('.botoes')
const divSobreMim = document.querySelector('#sobreMim')
const divCarreira = document.querySelector('#carreira')
const divHabilidades = document.querySelector('#habilidades')
const divEncerramento = document.querySelector('#encerramento')

console.log(card)
//Funções
sobreMim.addEventListener('click', function(){
  wpp.style.background = 'url(assets/img/starwarswpp.jpg)'
  wpp.style.backgroundSize = 'cover'
  wpp.style.backgroundAttachment = 'fixed'
  main.style.border = '3px solid #052386'
  foto.style.border = '1px solid #052386'
  divSobreMim.style.borderBottom = '4px solid #052386'
  divBotoes.style.borderBottom = '3px solid #052386'

  if(divCarreira == document.querySelector('.green')){
    divCarreira.classList.replace('green', 'card')
    divHabilidades.classList.replace('green', 'card')
    divEncerramento.classList.replace('green', 'card')
  } else  if(divCarreira == document.querySelector('.orange')){
    divCarreira.classList.replace('orange', 'card')
    divHabilidades.classList.replace('orange', 'card')
    divEncerramento.classList.replace('orange', 'card')
  } else  if(divCarreira == document.querySelector('.red')){
    divCarreira.classList.replace('red', 'card')
    divHabilidades.classList.replace('red', 'card')
    divEncerramento.classList.replace('red', 'card')
  }

})

carreira.addEventListener('click', function(){
  wpp.style.background = 'url(assets/img/starwarswpp2.jpg)'
  wpp.style.backgroundSize = 'cover'
  wpp.style.backgroundAttachment = 'fixed'
  main.style.border = '3px solid #157867'
  foto.style.border = '1px solid #157867'
  divSobreMim.style.borderBottom = '4px solid #157867'
  divBotoes.style.borderBottom = '3px solid #157867'
  
  divCarreira.classList.replace('card', 'green')
  divHabilidades.classList.replace('card', 'green')
  divEncerramento.classList.replace('card', 'green')

  if(divCarreira == document.querySelector('.orange')){
    divCarreira.classList.replace('orange', 'green')
    divHabilidades.classList.replace('orange', 'green')
    divEncerramento.classList.replace('orange', 'green')
  } else  if(divCarreira == document.querySelector('.red')){
    divCarreira.classList.replace('red', 'green')
    divHabilidades.classList.replace('red', 'green')
    divEncerramento.classList.replace('red', 'green')
  }

})

habilidades.addEventListener('click', function(){
  wpp.style.background = 'url(assets/img/starwarswpp3.jpg)'
  wpp.style.backgroundSize = 'cover'
  wpp.style.backgroundAttachment = 'fixed'
  main.style.border = '3px solid #D7622D'
  foto.style.border = '1px solid #D7622D'
  divSobreMim.style.borderBottom = '4px solid #D7622D'
  divBotoes.style.borderBottom = '3px solid #D7622D'

  divCarreira.classList.replace('green', 'orange')
  divHabilidades.classList.replace('green', 'orange')
  divEncerramento.classList.replace('green', 'orange')

  if(divCarreira == document.querySelector('.green')){
    divCarreira.classList.replace('green', 'orange')
    divHabilidades.classList.replace('green', 'orange')
    divEncerramento.classList.replace('green', 'orange')
  } else  if(divCarreira == document.querySelector('.red')){
    divCarreira.classList.replace('red', 'orange')
    divHabilidades.classList.replace('red', 'orange')
    divEncerramento.classList.replace('red', 'orange')
  } else  if(divCarreira == document.querySelector('.card')){
    divCarreira.classList.replace('card', 'orange')
    divHabilidades.classList.replace('card', 'orange')
    divEncerramento.classList.replace('card', 'orange')
  }

})

encerramento.addEventListener('click', function(){
  wpp.style.background = 'url(assets/img/starwarswpp4.jpg)'
  wpp.style.backgroundSize = 'cover'
  wpp.style.backgroundAttachment = 'fixed'
  main.style.border = '3px solid #800D0D'
  foto.style.border = '1px solid #800D0D'
  divSobreMim.style.borderBottom = '4px solid #800D0D'
  divBotoes.style.borderBottom = '3px solid #800D0D'

  divCarreira.classList.replace('orange', 'red')
  divHabilidades.classList.replace('orange', 'red')
  divEncerramento.classList.replace('orange', 'red')

  if(divCarreira == document.querySelector('.green')){
    divCarreira.classList.replace('green', 'red')
    divHabilidades.classList.replace('green', 'red')
    divEncerramento.classList.replace('green', 'red')
  } else  if(divCarreira == document.querySelector('.orange')){
    divCarreira.classList.replace('orange', 'red')
    divHabilidades.classList.replace('orange', 'red')
    divEncerramento.classList.replace('orange', 'red')
  } else  if(divCarreira == document.querySelector('.card')){
    divCarreira.classList.replace('card', 'red')
    divHabilidades.classList.replace('card', 'red')
    divEncerramento.classList.replace('card', 'red')
  }

})
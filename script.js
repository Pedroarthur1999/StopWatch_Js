const relogio = document.querySelector('.relogio p')
const inicio = document.querySelector('#start')
const pausa = document.querySelector('#stop')
const resetar = document.querySelector('.reset')

inicio.addEventListener('click', function(event){
    
    relogio.style.color = 'black'
});

pausa.addEventListener('click', function(event){
    
    
    relogio.style.color = 'red'
});

resetar.addEventListener('click', function(event){
    
    
    relogio.style.color = 'red'
});

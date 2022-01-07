

function createHour(seconds){

   const data = new Date(seconds * 1000);
   return data.toLocaleTimeString('pt-br',{
       hour12:false,
       timeZone:'GMT'
   })
}

let seconds = 0
function countHours(){
    
    const timer = setInterval(function(){
          
        seconds++;
        relogio.innerHTML = createHour(seconds)
        relogio.style.color = 'black'
    }, 1000)


    
}

console.log(createHour(seconds));
const relogio = document.querySelector('.relogio p')
const inicio = document.querySelector('#start')
const pausa = document.querySelector('#stop')
const resetar = document.querySelector('.reset')

inicio.addEventListener('click', function(event){
    
    countHours(seconds);
    
});

pausa.addEventListener('click', function(event){
    
    
    relogio.style.color = 'red'
});

resetar.addEventListener('click', function(event){
    
    relogio.style.color = 'red'
});

const relogio = document.querySelector(".relogio p");
const inicio = document.querySelector("#start");
const pausa = document.querySelector("#stop");
const resetar = document.querySelector(".reset");
let seconds = 0;
let timer;

function createHour(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-br", {
    hour12: false,
    timeZone: "GMT",
  });
}
function countHours() {
  timer = setInterval(function () {
    seconds++;
    relogio.innerHTML = createHour(seconds);
    relogio.style.color = "black";
  }, 1000);
}
inicio.addEventListener("click", function (event) {
    relogio.style.color = 'green';
  countHours(seconds);
});

pausa.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.style.color = "red";
});

resetar.addEventListener("click", function (event) {
  seconds = 0;
  clearInterval(timer);
  relogio.style.color = 'orange';
  relogio.innerHTML = createHour(seconds);
});

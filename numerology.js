const _name = document.getElementById("name");
const _lastName = document.getElementById("lastName");
const _day = document.getElementById("day");
const _month = document.getElementById("month");
const _year = document.getElementById("year");
const _sex = document.getElementById("sex");
const _btnCalcular = document.getElementById("calcular");
const _pResultado = document.getElementById("resultado");

_btnCalcular.addEventListener("click", calcular);

function calcular() {
  console.log("le picastes al boton calcular");
}

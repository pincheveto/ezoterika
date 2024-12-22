const _name = document.getElementById("name");
const _lastName = document.getElementById("lastName");
const _day = document.getElementById("day");
const _month = document.getElementById("month");
const _year = document.getElementById("year");
const _sex = document.getElementById("sex");
const _btnCalcular = document.getElementById("calcular");
const _pResultado = document.getElementById("resultado");

_btnCalcular.addEventListener("click", numerabilizar);

let sumName = 0;
let sumBD = 0;

let tablaPitagorica = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8,
  " ": 0,
};

function numerabilizar() {
  let name = _name.value;
  for (let char of name.toUpperCase()) {
    suma += tablaPitagorica[char];
  }
  _pResultado.innerText = "que pedro pinche pablo";
}

function calcular() {
  console.log("le picastes al boton calcular");
}

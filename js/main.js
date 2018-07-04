'use strict';

// creo un numero random:

var numeroAdivinar=0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// guardo el numero a adivinar

numeroAdivinar = getRandomNumber(100);


console.log(numeroAdivinar);

//recojo datos del input

var contador=0;
var button = document.querySelector(".button");
var feedback = document.querySelector(".feedback");

function recogerInput () {

  var entradaDatos;
  var input = document.querySelector('.addValor');
  entradaDatos = input.value;
  entradaDatos = parseInt(entradaDatos);

  console.log (entradaDatos);

  // comparo mi numero random con el numero que he recogido //

  if (entradaDatos === numeroAdivinar){
    feedback.innerHTML = 'FELICIDADES!! HAS GANADO!';
    var ocultar = document.querySelector('.button');
    button.classList.add('hidden');
  } else if (entradaDatos> numeroAdivinar){
    feedback.innerHTML = 'Te has pasado, intenta un numero menor!';
  }else {
    feedback.innerHTML = 'Te has quedado corta, intenta un numero mayor!';
  }

  contador += 1;
  var showContador = document.querySelector('.counter');
  showContador.innerHTML= contador;

}

button.addEventListener('click', recogerInput);

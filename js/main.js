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

  var input = document.querySelector('.addValor');
  var entradaDatos = parseInt(input.value);

  console.log (entradaDatos);

  // comparo mi numero random con el numero que he recogido //
  if (entradaDatos < 0 || entradaDatos > 100){
    feedback.innerHTML = 'El número a introducir tiene que estar contenido entre el 0 y el 100';
  }
  else if (entradaDatos === numeroAdivinar){
    feedback.innerHTML = 'FELICIDADES!! HAS GANADO!';
    var ocultar = document.querySelector('.button');
    button.classList.add('hidden');
  } else if (entradaDatos> numeroAdivinar){
    feedback.innerHTML = 'Te has pasado, intenta un numero menor!';
  }else if (entradaDatos < numeroAdivinar){
    feedback.innerHTML = 'Te has quedado corta, intenta un numero mayor!';
  } else {
    feedback.innerHTML = 'El dato a introducir tiene que ser un numero!!';
  }

  contador += 1;
  var showContador = document.querySelector('.counter');
  showContador.innerHTML= contador;

}

button.addEventListener('click', recogerInput);

//funciones que muestra las tarjetas de preguntas al hacer click al botón "Ingresa al juego" y posteriormente en las tarjetas y en resultado.
function showDiv() {
  document.getElementById("containerJuego").style.display = "block";
}

function showDiv2() {
  document.getElementById("containerdeJuego2").style.display = "block";
}

function showDiv3() {
  document.getElementById("containerdeJuego3").style.display = "block";
}

function showDiv4() {
  document.getElementById("containerdeJuego4").style.display = "block";
}

function showDiv5() {
  document.getElementById("containerdeJuego5").style.display = "block";
}

//Preguntas
let ourQuestions = [
  {
    question1: "¿Cuál es el nombre de la mascota de Neville?",
    answers: {
      a: "Trevor",
      b: "Nagini",
      c: "Snape",
    },
    correctAnswer: "Trevor",
  },
  {
    question2: "¿Cuál de estos es un Horrocrux de Voldemort?",
    answers: {
      a: "La espada de Gryffindor",
      b: "La tiara de Ravenclaw",
      c: "La canasta de Slytherin",
    },
    correctAnswer: "La tiara de Ravenclaw",
  },
  {
    question3: "¿Cuál es el símbolo de la casa Hufflepuf?",
    answers: {
      a: "Un fénix",
      b: "Un león",
      c: "Un tejón",
    },
    correctAnswer: "Un tejón",
  },
  {
    question4: "¿Cuáles son las reliquias de la muerte?",
    answers: {
      a: "La espada, la capa y el sombrero",
      b: "La varita, la piedra y la capa",
      c: "El león, la bruja y el ropero",
    },
    correctAnswer: "La varita, la piedra y la capa",
  },
  {
    question5:
      "¿Cuál es la frase célebre que el profesor Snape dijo a Dumbledore?",
    answers: {
      a: "Always",
      b: "For ever",
      c: "Avada Kedavra",
    },
    correctAnswer: "Always",
  },
];

//pruebas de recuperacion de datos del array
//console.log(ourQuestions[0])
//console.log(ourQuestions[0].answers);
//console.log(ourQuestions[0].correctAnswer);


//asociacion entre el array y el dom
//pregunta 1
let pregunta1 = document.getElementById('pregunta1')
pregunta1 = ourQuestions[0].question1

//alternativas pregunta 1
let respuesta1p1 = document.getElementById('respuesta1p1') //declarar que la id en el html existe en js
respuesta1p1 = ourQuestions[0].answers.a //estableciendo el valor de esta variable en el array
document.getElementById("respuesta1p1").value = ourQuestions[0].answers.a; //definiendo el value de la opcion en el html de forma dinamica de acuerdo al array.

let respuesta2p1 = document.getElementById("respuesta2p1");
respuesta2p1 = ourQuestions[0].answers.b;
document.getElementById("respuesta2p1").value = ourQuestions[0].answers.b;

let respuesta3p1 = document.getElementById("respuesta3p1");
respuesta3p1 = ourQuestions[0].answers.c;
document.getElementById("respuesta3p1").value = ourQuestions[0].answers.c;

//pregunta 2
let pregunta2 = document.getElementById('pregunta2')
pregunta2 = ourQuestions[1].question2;
//alternativas pregunta 2
let respuesta1p2 = document.getElementById('respuesta1p2')
respuesta1p2 = ourQuestions[1].answers.a
document.getElementById("respuesta1p2").value = ourQuestions[1].answers.a;

let respuesta2p2 = document.getElementById("respuesta2p2");
respuesta2p2 = ourQuestions[1].answers.b;
document.getElementById("respuesta2p2").value = ourQuestions[1].answers.b;

let respuesta3p2 = document.getElementById("respuesta3p2");
respuesta3p2 = ourQuestions[1].answers.c;
document.getElementById("respuesta3p2").value = ourQuestions[1].answers.c;

//pregunta 3
let pregunta3 = document.getElementById("pregunta3");
pregunta3 = ourQuestions[2].question3;
//alternativas pregunta 3
let respuesta1p3 = document.getElementById("respuesta1p3");
respuesta1p3 = ourQuestions[2].answers.a;
document.getElementById("respuesta1p3").value = ourQuestions[2].answers.a;

let respuesta2p3 = document.getElementById("respuesta2p3");
respuesta2p3 = ourQuestions[2].answers.b;
document.getElementById("respuesta2p3").value = ourQuestions[2].answers.b;

let respuesta3p3 = document.getElementById("respuesta3p3");
respuesta3p3 = ourQuestions[2].answers.c;
document.getElementById("respuesta3p3").value = ourQuestions[2].answers.c;


//pregunta 4
let pregunta4 = document.getElementById("pregunta4")
pregunta4 = ourQuestions[3].question4;
//alternativas pregunta 4
let respuesta1p4 = document.getElementById("respuesta1p4");
respuesta1p4 = ourQuestions[3].answers.a;
document.getElementById("respuesta1p4").value = ourQuestions[3].answers.a;

let respuesta2p4 = document.getElementById("respuesta2p4");
respuesta2p4 = ourQuestions[3].answers.b;
document.getElementById("respuesta2p4").value = ourQuestions[3].answers.b;

let respuesta3p4 = document.getElementById("respuesta3p4");
respuesta3p4 = ourQuestions[3].answers.c;
document.getElementById("respuesta3p4").value = ourQuestions[3].answers.c;

//pregunta 5
let pregunta5 = document.getElementById("pregunta5")
pregunta5= ourQuestions[4].question5;
//alternativas pregunta 5
let respuesta1p5 = document.getElementById("respuesta1p5");
respuesta1p5 = ourQuestions[4].answers.a;
document.getElementById("respuesta1p5").value = ourQuestions[4].answers.a;

let respuesta2p5 = document.getElementById("respuesta2p5");
respuesta2p5 = ourQuestions[4].answers.b;
document.getElementById("respuesta2p5").value = ourQuestions[4].answers.b;

let respuesta3p5 = document.getElementById("respuesta3p5");
respuesta3p5 = ourQuestions[4].answers.c;
document.getElementById("respuesta3p5").value = ourQuestions[4].answers.c;

//función para recoger las respuestas del dom (empezamos por la respuesta por defecto y recoge las respuestas escogidas a medida que progresamos)

function bigFunction() {
  let mascota = document.getElementById("p1").value;
  let horrocrux = document.getElementById("p2").value;
  let simbolo = document.getElementById("p3").value;
  let reliquias = document.getElementById("p4").value;
  let snape = document.getElementById("p5").value;
  //console.log(mascota)
  //console.log(horrocrux);
  //console.log(simbolo);
  //console.log(reliquias);
  //console.log(snape);

  //recuperar respuestas correctas usando ciclos if en comparacion al value recogido desde el html (tienen variable asignada, por ejemplo mascota)
  let respuestaCorrecta1 = ourQuestions[0].correctAnswer;
  //console.log(respuestaCorrecta1);
  let respuestaCorrecta2 = ourQuestions[1].correctAnswer;
  //console.log(respuestaCorrecta2);
  let respuestaCorrecta3 = ourQuestions[2].correctAnswer;
  //console.log(respuestaCorrecta3);
  let respuestaCorrecta4 = ourQuestions[3].correctAnswer;
  //console.log(respuestaCorrecta4);
  let respuestaCorrecta5 = ourQuestions[4].correctAnswer;
  //console.log(respuestaCorrecta5);

//contador de respuestas correctas e incorrectas
  let puntajeCorrecto = 0;
  let puntajeIncorrecto = 0;

if (respuestaCorrecta1 === mascota) {
  puntajeCorrecto = puntajeCorrecto + 1
   document.querySelector("#p1").style.backgroundColor="#11C83A";
} else {
  puntajeIncorrecto = puntajeIncorrecto + 1
  document.querySelector("#p1").style.backgroundColor = "#F11F0F";
}
  
if (respuestaCorrecta2 === horrocrux) {
  puntajeCorrecto = puntajeCorrecto + 1;
  document.querySelector("#p2").style.backgroundColor = "#11C83A";
} else {
  puntajeIncorrecto = puntajeIncorrecto + 1;
  document.querySelector("#p2").style.backgroundColor = "#F11F0F";
}
  
if (respuestaCorrecta3 === simbolo) {
  puntajeCorrecto = puntajeCorrecto + 1;
  document.querySelector("#p3").style.backgroundColor = "#11C83A";
} else {
  puntajeIncorrecto = puntajeIncorrecto + 1;
  document.querySelector("#p3").style.backgroundColor = "#F11F0F";
}
  
if (respuestaCorrecta4 === reliquias) {
  puntajeCorrecto = puntajeCorrecto + 1; 
  document.querySelector("#p4").style.backgroundColor = "#11C83A";
} else {
  puntajeIncorrecto = puntajeIncorrecto + 1;
  document.querySelector("#p4").style.backgroundColor = "#F11F0F";
}
  
if (respuestaCorrecta5 === snape) {
  puntajeCorrecto = puntajeCorrecto + 1;
  document.querySelector("#p5").style.backgroundColor = "#11C83A";
} else {
  puntajeIncorrecto = puntajeIncorrecto + 1;
   document.querySelector("#p5").style.backgroundColor = "#F11F0F";
} 

alert(`Hola de nuevo ${nombre}! Tu total es: ${puntajeCorrecto} respuestas correctas, y ${puntajeIncorrecto} respuestas incorrectas!`)
  
}


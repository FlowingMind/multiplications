/////////////////////////////////////////////////////////////
//Etats
/////////////////////////////////////////////////////////////

/*
1: choix des questions
2: préparation et affichage de la question
3: traitement de la réponse et affichage correspondant
4: terminé
*/
let GAME_STATUS=1;

/////////////////////////////////////////////////////////////
//création d'un tableau qui va servir à lister les éléments à interroger déjà tirés
let liste_elements_restants=[];
let liste_mauvaises_reponses=[];

let nombre_questions_choisies=0;

let switch_qr=1;

let indice_test=0;

var son_nok = new Audio('367760__johandeecke__fx-clankibuzz-hit.wav');
var son_ok = new Audio('252681__jomellejager__magic-sound-1.wav');
var son_click = new Audio('176727__yottasounds__pop.wav');

/////////////////////////////////////////////////////////////
//Main
/////////////////////////////////////////////////////////////
//fonction qui attend que le document soit chargé
document.addEventListener("DOMContentLoaded", function(event0)
  {
   console.log("DOM fully loaded and parsed");

   document.getElementById('container_test_questions').style.display = 'none';

   //masquage des éléments inutiles de la page
   document.getElementById('label_question').style.visibility = 'visible';
   document.getElementById('input_reponse').style.visibility = 'hidden';
   document.getElementById('bouton_reponse').style.visibility = 'visible';
   document.getElementById('reste_a_tester').style.visibility = 'hidden';
   document.getElementById('label_commentaires').style.visibility = 'hidden';

   document.getElementById('container_test_questions').style.display = 'none';

   /////////////////////////////////////////////////////////////
   // Détection des évènements
   /////////////////////////////////////////////////////////////
   //listener de l'action keydown
   document.addEventListener("keydown", function(event)
    {
     //touche entrée
     if (event.which === 13 || event.keyCode === 13 || event.key === "Enter")
      {
      nouveautour();
      }
    });

  //fin du main
  });

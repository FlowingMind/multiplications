//création d'un tableau qui va servir à lister les éléments à interroger déjà tirés
let liste_elements_restants=[];
initialisation_elements_restants();

let liste_mauvaises_reponses=[];

let switch_qr=1;

let indice_test=0;


/////////////////////////////////////////////////////////////
//Main
/////////////////////////////////////////////////////////////
//fonction qui attend que le document soit chargé
document.addEventListener("DOMContentLoaded", function(event0)
  {
   console.log("DOM fully loaded and parsed");

   //masquage des éléments inutiles de la page
   document.getElementById('label_question'). style.visibility = 'visible';
   document.getElementById('input_reponse'). style.visibility = 'hidden';
   document.getElementById('bouton_reponse'). style.visibility = 'visible';
   document.getElementById('reste_a_tester'). style.visibility = 'hidden';
   document.getElementById('label_commentaires'). style.visibility = 'hidden';


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


  });

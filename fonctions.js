function initialisation_elements_restants() {
  for (let i = 0; i < table_multiplications.length; i++) {
    liste_elements_restants[i] = i;
  }
  console.log('liste des éléments restants à tester', liste_elements_restants);
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function traitement_question() {
  console.log('>fonction question');

  //masquage des éléments inutiles de la page
  document.getElementById('label_question'). style.visibility = 'visible';
  document.getElementById('input_reponse'). style.visibility = 'visible';
  document.getElementById('bouton_reponse'). style.visibility = 'visible';
  document.getElementById('reste_a_tester'). style.visibility = 'hidden';
  document.getElementById('label_commentaires'). style.visibility = 'hidden';

  //effacer le contenu de l'input reponse
  document.getElementById('input_reponse').setAttribute("type", "value");
  document.getElementById('input_reponse').value = '';


  //mettre en forme
  document.getElementById('bouton_reponse').innerHTML = "Répondre";

  console.log('nombre éléments restants', liste_elements_restants.length)
  //tirer un numéro au hasard basé sur la taille du tableau table_multiplications
  indice_test = Math.round(Math.random() * (liste_elements_restants.length - 1));
  console.log('indice test', indice_test);

  //afficher la question sur la page html
  console.log('question', table_multiplications[liste_elements_restants[indice_test]][0]);
  console.log('reponse attendue', table_multiplications[liste_elements_restants[indice_test]][1]);
  document.getElementById('label_question').innerHTML = table_multiplications[liste_elements_restants[indice_test]][0];

}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function traitement_reponse() {
  console.log('>fonction réponse');

  //récupérer la réponse
  reponse = document.getElementById('input_reponse').value;
  console.log('réponse utilisateur', reponse);

  //masquage des éléments inutiles de la page
  document.getElementById('label_question'). style.visibility = 'visible';
  document.getElementById('input_reponse'). style.visibility = 'visible';
  document.getElementById('bouton_reponse'). style.visibility = 'visible';
  document.getElementById('reste_a_tester'). style.visibility = 'hidden';
  document.getElementById('label_commentaires'). style.visibility = 'visible';

  //vérifier si la réponse est bonne
  if (reponse == table_multiplications[liste_elements_restants[indice_test]][1]) { //bonne réponse
    console.log('bonne réponse');
   document.getElementById('label_commentaires'). style.visibility = 'visible';
    document.getElementById('label_commentaires').innerHTML = "Bonne réponse";

  } else { //mauvaise réponse
    console.log('mauvaise réponse');
    document.getElementById('label_commentaires').innerHTML = "Mauvaise réponse";
    liste_mauvaises_reponses.push(table_multiplications[liste_elements_restants[indice_test]][0]);
    console.log(table_multiplications[liste_elements_restants[indice_test]]);
  }

  document.getElementById('bouton_reponse').innerHTML = "Nouvelle question";

  //retirer l'élément de la liste des éléments restants
  supprimé = liste_elements_restants.splice(indice_test, 1)
  console.log('valeure supprimée', supprimé);
  console.log('liste des éléments restants à tester', liste_elements_restants);
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function nouveautour() {
  console.log('nouveau tour');
  console.log('switch_qr=', switch_qr);

  if (switch_qr === 1) { //traitement question
    console.log('if (switch_qr===1');
    if (liste_elements_restants.length > 0) { //la liste n'est pas vide
      traitement_question();
      switch_qr = 0;
    } else {//la liste est vide
      console.log('terminé');

      //masquage des éléments inutiles de la page
      document.getElementById('label_question'). style.visibility = 'hidden';
      document.getElementById('input_reponse'). style.visibility = 'hidden';
      document.getElementById('bouton_reponse'). style.visibility = 'hidden';
      document.getElementById('reste_a_tester'). style.visibility = 'visible';
      document.getElementById('label_commentaires'). style.visibility = 'visible';

      document.getElementById('label_commentaires').innerHTML = "Bravo tu as terminé, les questions que tu n'as pas réussies sont les suivantes :";
      document.getElementById('reste_a_tester').innerHTML = liste_mauvaises_reponses;
    }
  } else if (switch_qr === 0) { //traitement reponse
    console.log('if (switch_qr===0');
    traitement_reponse();
    switch_qr = 1;
  }
}

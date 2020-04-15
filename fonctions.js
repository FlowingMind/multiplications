/////////////////////////////////////////////////////////////
//fonction qui prépare la liste des questions, elles seront éliminées au fur et à mesure de l'avancement du jeu
/////////////////////////////////////////////////////////////
function click_bouton_choix_table(clicked_id)
{
/* How to use dynamic variable names in JavaScript ?
https://www.geeksforgeeks.org/how-to-use-dynamic-variable-names-in-javascript/ */
console.log('click sur : ',clicked_id);
//la chaine de caractères est éclatée selon le séparateur
splouf=clicked_id.split('_');
console.log(splouf);

if (splouf[2]=='go')
  {//c'est le bouton go qui a été appuyé
  console.log('go');
  nombre_questions_choisies=liste_elements_restants.length;
  //effacer le tableau de choix des questions
  document.getElementById('container_choix_questions').style.display = 'none';
    //afficher le tableau de jeu
  document.getElementById('container_test_questions').style.display = 'block';
  }
else
  {// ce n'est pas le bouton go qui a été appuyé
  //quel est le type d'opération
  switch (splouf[2])
    {
    case 'addition':
      console.log('addition');
      choix_offset=0;
      break;
    case 'soustraction':
      choix_offset=100;
      break;
    case 'multiplication':
      choix_offset=200;
      break;
    case 'division':
      choix_offset=300;
      break;
    default:
      console.log('erreur de type opération');
    }

  if ( eval('choix_table_'+splouf[2]+'_'+splouf[3]+' === 0') )
    {//la case n'était pas sélectionnée
    console.log('variable ===0');
    //la valeur de la variable globale gardant la trace que la table a été sélectionnée est mise à 1
    eval('choix_table_'+splouf[2]+'_'+splouf[3]+' = 1');
    //le bouton est affiché vert
    document.getElementById(clicked_id).style.background='lightgreen';

    //ajouter la table à liste_elements_restants
    for (let i = 0; i <10; i++)
      {
      liste_elements_restants.push(choix_offset+10*(splouf[3]-1)+i);
      }
    console.log('liste_elements_restants',liste_elements_restants);
    }
  else
    {//la case était sélectionnée
    console.log('variable != 0');
    //la valeur est mise à 0
    eval('choix_table_'+splouf[2]+'_'+splouf[3]+' = 0');
    // le bouton est affiché gris
    document.getElementById(clicked_id).style.background='lightgrey';
    //la liste des questions est mise à jour par la supression des valeurs correspondantes dans liste_elements_restants
    for (let i = 0; i <10; i++)
      {
      //https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
      var filteredArray = liste_elements_restants.filter(function(e) { return e !== choix_offset+10*(splouf[3]-1)+i });
      liste_elements_restants=filteredArray;
      }
    console.log('liste_elements_restants',liste_elements_restants);
    }
  }
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function traitement_question() {
  console.log('>fonction question');

  //masquage des éléments inutiles de la page
  document.getElementById('label_question'). style.display = 'block';

  document.getElementById('input_reponse'). style.display = 'block';
  document.getElementById('input_reponse'). style.visibility = 'visible';
  document.getElementById('input_reponse').style.backgroundColor = "#f2f2f2";

  document.getElementById('bouton_reponse'). style.display = 'block';

  document.getElementById('reste_a_tester'). style.display = 'block';
  document.getElementById('reste_a_tester'). style.visibility = 'visible';

  document.getElementById('label_commentaires'). style.display = 'none';

  document.getElementById('input_reponse').disabled=false;

  //effacer le contenu de l'input reponse
  document.getElementById('input_reponse').setAttribute("type", "value");
  document.getElementById('input_reponse').value = '';

  //mettre en forme
  document.getElementById('bouton_reponse').innerHTML = "Valider";

  console.log('nombre éléments restants', liste_elements_restants.length)
  //tirer un numéro au hasard basé sur la taille du tableau table_multiplications
  indice_test = Math.round(Math.random() * (liste_elements_restants.length - 1));
  console.log('indice test', indice_test);

  //afficher la question sur la page html
  console.log('question', table_multiplications[liste_elements_restants[indice_test]][0]);
  console.log('reponse attendue', table_multiplications[liste_elements_restants[indice_test]][1]);
  document.getElementById('label_question').innerHTML = table_multiplications[liste_elements_restants[indice_test]][0];

  //afficher l'indicateur d'avancement
  let indicateur = 'Reste : ' + liste_elements_restants.length + '/' + nombre_questions_choisies;
  console.log('liste_elements_restants.length',liste_elements_restants.length);
  console.log('table_multiplications.length',table_multiplications.length);
  console.log('indicateur',indicateur);
  document.getElementById('reste_a_tester').innerHTML = indicateur;

  //place le curseur dans la barre de réponse
  document.getElementById("input_reponse").focus();

}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function traitement_reponse() {
  console.log('>fonction réponse');

  //récupérer la réponse
  reponse = document.getElementById('input_reponse').value;
  console.log('réponse utilisateur', reponse);

  //masquage des éléments inutiles de la page
  document.getElementById('label_question'). style.display = 'block';
  document.getElementById('input_reponse'). style.display = 'block';
  document.getElementById('bouton_reponse'). style.display = 'block';
  document.getElementById('reste_a_tester'). style.display = 'none';
  document.getElementById('label_commentaires'). style.display = 'block';
  document.getElementById('label_commentaires'). style.visibility = 'visible';

  document.getElementById('input_reponse').disabled=true;

  //afficher la bonne réponse à la place de la question
  document.getElementById('label_question'). innerHTML = table_multiplications[liste_elements_restants[indice_test]][0]+' = '+table_multiplications[liste_elements_restants[indice_test]][1];

  //vérifier si la réponse est bonne
  if (reponse == table_multiplications[liste_elements_restants[indice_test]][1]) { //bonne réponse
    son_ok.play();
    console.log('bonne réponse');
    document.getElementById('label_commentaires').innerHTML = "Bonne réponse";
    //met la réponse en vert
    document.getElementById('input_reponse').style.backgroundColor = "#c6ebd9";
  } else { //mauvaise réponse
    son_nok.play();
    console.log('mauvaise réponse');
    document.getElementById('label_commentaires').innerHTML = "Mauvaise réponse";
    liste_mauvaises_reponses.push(table_multiplications[liste_elements_restants[indice_test]][0]);
    console.log(table_multiplications[liste_elements_restants[indice_test]]);
    //met la réponse en rouge
    document.getElementById('input_reponse').style.backgroundColor = "#ffcccc";
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

  if (switch_qr === 1) { //affichage question
    son_click.play();
    console.log('if (switch_qr===1');
    if (liste_elements_restants.length > 0) { //la liste n'est pas vide
      traitement_question();
      switch_qr = 0;
    } else {//la liste est vide
      console.log('terminé');
      //masquage des éléments inutiles de la page
      document.getElementById('label_question').style.display = 'none';
      document.getElementById('input_reponse').style.display = 'none';
      document.getElementById('bouton_reponse').style.display = 'none';
      document.getElementById('reste_a_tester').style.display = 'block';
      document.getElementById('label_commentaires').style.display = 'block';
      //affichage des messages
      document.getElementById('label_commentaires').innerHTML = "Bravo tu as terminé, les questions que tu n'as pas réussies sont les suivantes :";
      document.getElementById('reste_a_tester').innerHTML = liste_mauvaises_reponses;
    }
  } else if (switch_qr === 0) { //traitement reponse
    console.log('if (switch_qr===0');
    traitement_reponse();
    switch_qr = 1;
  }
}

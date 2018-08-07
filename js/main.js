var playerScore = 0;
var computerScore = 0;
var finalScore = 0;
function comparer (user, computer) {

//*****************Egalité********************

if (user === computer) {
  return "Egalité " + choixUtilisateur;
}

//****************Différences******************

else if (user === 'pierre') {
  if (computer === 'ciseaux') {
        playerScore++;
        return "La pierre gagne ! Tu gagnes 1 point !";
}else {
       computerScore++;
       return "La feuille gagne ! L''ordinateur gagne 1 point";
 }
}else if (user === 'feuille') {
  if (computer === 'pierre') {
        playerScore++;
        return "La feuille gagne ! Tu gagnes 1 point !";
  }else {
        computerScore++;
        return "Le ciseaux gagnent ! L'ordinateur gagne 1 point";
        }
  }else if (user === 'ciseaux') {
    if (computer === 'feuille') {
          playerScore++;
          return "Le ciseaux gagne ! Tu gagnes 1 point !";
  }else {
          computerScore++;
          return "La pierre gagne ! L'ordinateur gagne 1 point";
        }
    }
}
while (finalScore != 3){

var choixUtilisateur = prompt("Pierre, feuille, ciseaux ?").toLowerCase();
var erreur = 1 ;
while (erreur === 1){
  if ((choixUtilisateur === "pierre")||(choixUtilisateur ==="ciseaux")||(choixUtilisateur === "feuille")){

    erreur = 0;
  }
  else {
    console.log("Erreur de saisie ?");
    choixUtilisateur = prompt("Pierre, feuille, ciseaux ?");
  }
}


//*****************choix de l'ordi*********************

  var choixOrdi = Math.random();
  if (choixOrdi <= 0.33) {
      choixOrdi = 'pierre';
  }
  else if (choixOrdi <= 0.66) {
      choixOrdi = 'feuille';
  }
  else {
  choixOrdi = 'ciseaux';
  }
  console.log("L''ordinateur a choisi " + choixOrdi);

//***************lancement de la comparaison**************************
  console.log(comparer(choixUtilisateur,choixOrdi));

//*******************affichage du score*******************************
  console.log("User " + playerScore + "-" + computerScore + " User");
  if ((playerScore===3)||(computerScore===3)){
    finalScore = 3 ;
  }

}

if (playerScore===3){
  console.log("Bravo ! Vous avez gagné !!");
}
else {
  console.log("Dommage..");
}

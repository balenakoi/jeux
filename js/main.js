var scoreUtilisateur = 0;
var scoreOrdinateur = 0;
var scoreFinal = 0;
function comparer (user, computer) {

//*****************Egalité********************

if (user === computer) {
  return "Egalité " + choixUtilisateur;
}

//****************Différences******************

else if (user === 'pierre') {
  if (computer === 'ciseaux') {
        scoreUtilisateur++;
        return "La pierre gagne ! Tu gagnes 1 point !";
}else {
       scoreOrdinateur++;
       return "La feuille gagne ! L''ordinateur gagne 1 point";
 }
}else if (user === 'feuille') {
  if (computer === 'pierre') {
        scoreUtilisateur++;
        return "La feuille gagne ! Tu gagnes 1 point !";
  }else {
        scoreOrdinateur++;
        return "Le ciseaux gagnent ! L'ordinateur gagne 1 point";
        }
  }else if (user === 'ciseaux') {
    if (computer === 'feuille') {
          scoreUtilisateur++;
          return "Le ciseaux gagne ! Tu gagnes 1 point !";
  }else {
          scoreOrdinateur++;
          return "La pierre gagne ! L'ordinateur gagne 1 point";
        }
    }
}
while (scoreFinal != 3){

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
  console.log("User "+scoreUtilisateur+"-"+scoreOrdinateur+" Ordinateur");
  if ((scoreUtilisateur===3)||(scoreOrdinateur===3)){
    scoreFinal = 3 ;
  }

}

if (scoreUtilisateur===3){
  console.log("Bravo ! Vous avez gagné !!");
}
else {
  console.log("Dommage..");
}

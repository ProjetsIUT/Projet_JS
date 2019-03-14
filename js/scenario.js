
let C = new carte();
var P = new player("Joueur");


function clavier(e){

  k = e.keyCode;

 switch(k) {
  	 case 37 : // touche gauche
  
      P.deplacer(4)
    
      break;
    case 38 : // touche haut

      P.deplacer(1)
      break;
    case 39 : // touche droite

      P.deplacer(2)
      break;
    case 40 : // touche bas
      
      P.deplacer(3)
      break;
    
    default :
  }

}

function start(){

	let body = document.getElementsByTagName("body");
	body[0].addEventListener('keydown',clavier);

	P.changer_position(300,500)

}





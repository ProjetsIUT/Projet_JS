
var canvas = document.getElementById("carte")
var C = new carte(canvas)
var P = new player("Joueur", C,290,460)
var P2 = new player("Joueur", C, 290,490)

var tab_ennemis=[new ennemi("Ennemi1",C,20,20), new ennemi("Ennemi2",C,100,100), new ennemi("Ennemi3",C,200,200),new ennemi("Ennemi4",C,330,480),
                 new ennemi("Ennemi5",C,330,480), new ennemi("Ennemi6",C,197,468), new ennemi("Ennemi7",C,547,239), new ennemi("Ennemi8",C,319,128),
                 new ennemi("Ennemi9",C,456,466), new ennemi("Ennemi10",C,662,295)]
var temps = 500
var a_temps = document.getElementById("time")


function clavier(e){

  k = e.keyCode;
  e.preventDefault(); //annuler le comportement par défaut des flèches 

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
    
    case 90: // touche z haut

      P2.deplacer(1)
      break;

    case 81: // touche q gauche
      P2.deplacer(4)
      break;

    case 83: // touche s bas
      P2.deplacer(3)
      break;

    case 68: // touche d droite
      P2.deplacer(2)
      break;

    default :
  }

}

function start(){

  console.log("start")

	let body = document.getElementsByTagName("body")
	body[0].addEventListener('keydown',clavier)

  C.set_background()
  P.placer_autres()
  P2.placer_autres()

  setInterval(time,1000)


}


function time(){

  if(temps==0){

    alert("Soyez plus rapide la prochaine fois !")
    document.location.reload()

  }

  temps=temps -1
  a_temps.innerHTML="Temps restant: " + temps 

}

start()


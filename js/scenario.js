var canvas
var C
var P
var P2

var tab_ennemis
var temps
var a_temps


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

function viderbody() {
  while(document.body.lastChild) {
    document.body.removeChild(document.body.lastChild)
  }
}

function constructmainmenu() {
  viderbody()
  let tit = document.createElement('h1')
  tit.innerHTML = "Invasion au premier etage du batiment k !"
  tit.style.textAlign = "center"
  tit.style.fontSize = "4em"
  document.body.appendChild(tit)
  let beg = document.createElement('button')
  beg.innerHTML = "Commencer le jeu"
  beg.className = "beg"
  beg.href = "#"
  beg.style.fontSize = "2em"
  document.body.appendChild(beg)
  beg.onclick = constructgamepage
}

window.onload = constructmainmenu

function constructgamepage() {
  viderbody()
  var title = document.createElement('h1')
  title.innerHTML = "Invasion au premier etage du batiment k !"
  document.body.appendChild(title)
  var carte = document.createElement('canvas')
  carte.id = "carte"
  carte.width = "700"
  carte.height = "600"
  document.body.appendChild(carte)
  var divmenu = document.createElement('div')
  divmenu.id = "menu"
  document.body.appendChild(divmenu)
  var divlife = document.createElement('div')
  divlife.id = "life"
  divmenu.appendChild(divlife)
  var vierestantesJ1 = document.createElement("a")
  vierestantesJ1.innerHTML = "Vies Restantes du Joueur 1"
  divlife.appendChild(vierestantesJ1)
  var divheart = document.createElement("div")
  divheart.id = "heart"
  for(let i = 0; i<3; i++) {
    let img = document.createElement("img")
    img.id = "heart" + i
    img.src = "img/heart.png"
    divheart.appendChild(img)
  }
  divlife.appendChild(divheart)

  var divlifeUn = document.createElement('div')
  divlifeUn.id = "lifeUn"
  divmenu.appendChild(divlifeUn)
  var vierestantesJ2 = document.createElement("a")
  vierestantesJ2.innerHTML = "Vies Restantes du Joueur 2"
  divlifeUn.appendChild(vierestantesJ2)
  var divheartUn = document.createElement("div")
  divheartUn.id = "heartUn"
  for(let i = 0; i<3; i++) {
    let imgUn = document.createElement("img")
    imgUn.id = "heart_un_" + i
    imgUn.src = "img/heart.png"
    divheartUn.appendChild(imgUn)
  }
  divlifeUn.appendChild(divheartUn)

  var divitems = document.createElement('div')
  divitems.id = "items"
  divmenu.appendChild(divitems)
  var atime = document.createElement('a')
  atime.id = "time"
  atime.innerHTML = "Temps restant"
  divitems.appendChild(atime)
  var divnav = document.createElement('div')
  divnav.id = "nav"
  divmenu.appendChild(divnav)
  var acommencer = document.createElement('a')
  acommencer.id = "commencer"
  acommencer.href = "#"
  acommencer.innerHTML = "Commencer la partie"
  acommencer.className = "beg"
  divnav.appendChild(acommencer)
  document.getElementById("commencer").onclick = beginning
}

function beginning() {
  canvas = document.getElementById("carte")
  C = new carte(canvas)
  P = new player("Joueur", C,290,460)
  P2 = new player("Joueur", C, 290,490)
  tab_ennemis = [new ennemi("Ennemi1",C,20,20), new ennemi("Ennemi2",C,100,100), new ennemi("Ennemi3",C,200,200),new ennemi("Ennemi4",C,330,480),
  new ennemi("Ennemi5",C,330,480), new ennemi("Ennemi6",C,197,468), new ennemi("Ennemi7",C,547,239), new ennemi("Ennemi8",C,319,128),
  new ennemi("Ennemi9",C,456,466), new ennemi("Ennemi10",C,662,295)]
  temps = 500
  a_temps = document.getElementById("time")
  start()
}

function start(){

  console.log("start")

	let body = document.getElementsByTagName("body")
	body[0].addEventListener('keydown',clavier)

  C.set_background()
  P.placer_autres()
  P2.placer_autres()

  	setInterval(time,2000)


}



function time(){

  if(temps==0){

    alert("Soyez plus rapide la prochaine fois !")
    document.location.reload()

  }

  temps=temps -1
  a_temps.innerHTML="Temps restant: " + temps 

}

var canvas
var C
var P
var P2

var tab_ennemis
var tab_items
var temps
var a_temps
var difficult = 1 //1 = facile 2 = moyen 3= dur

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
  P = new player("Joueur1", C,290,460)
  P2 = new player("Joueur2", C, 290,490)

  resetmobs()
placermobs()


    
  }
  function resetmobs(){
    tab_items = []
    tab_ennemis = []

  }

  function placermobs(){
    var tabposX = [100, 200, 330, 330, 197, 547, 319, 456, 662, 
                  50, 20, 10, 230, 110, 547, 220, 17, 650]

    var tabposY = [100, 200, 480, 520, 468, 238, 128, 466, 295, 
                  100, 200, 480, 300, 468, 450, 500, 210, 114]

    tab_items = new Array()
    tab_ennemis = new Array()
    let j = 0
    let k = 0
    let m = 0
    for(let i = 0; i<20; i++){
      let lck = Math.floor(Math.random() * 10)//random entre 0 et 9
      console.log(lck)
      if(lck > 4  ){
        tab_ennemis[j] = new ennemi("Ennemi",C,tabposX[i],tabposY[i])
        console.log('ennemi')
        j++
      }else if (lck > 2){
        tab_items[k] = new item("pomme", "img/pomme2.png", document.getElementById("carte"), C, tabposX[i], tabposY[i] )
        k++
         console.log('pomme')
      }else if(lck > 1){
        tab_items[k] = new item("bonbon", "img/bonbon.png", document.getElementById("carte"), C, tabposX[i], tabposY[i] )
        k++
         console.log('bonbon')
      }else{
                tab_items[k] = new item("bonbon", "img/poisson.png", document.getElementById("carte"), C, tabposX[i], tabposY[i] )
        k++
      }
  }
  



  if(difficult = 1){
      temps = 500
    }else{
      temps = 300
    }

  a_temps = document.getElementById("time")
  start()
}

function start(){

  console.log("start")

	let body = document.getElementsByTagName("body")
	body[0].addEventListener('keydown',clavier)

  C.set_background()
  P.placer_autres()


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

class ennemi extends personnage{


	constructor(name, P, carte,x,y){

		super(name, "img/player.png", document.getElementById("carte"), carte,x,y)

		this.direction = 1
		this.personnage = P

		var t = this;
	//	this.timer = setInterval(function(){t.deplacer();}, 100);

	}



	deplacer(){


		console.log("se déplace")
		var x = this.direction 

		if (this.detecter_obstacle(x)){

			this.direction = Math.floor(Math.random() * 4)
			x = this.direction 

		}



 	
		//sauvegarde des coordonnées actuelles pour supprimer
		let oldX = this.posX
		let oldY = this.posY

		switch(x){

			case 1:  //Vers le haut

				this.posY -= this.vitesse
				break;
		
			case 2: //Vers la droite

				this.posX += this.vitesse
				break;

			case 3: //Vers le bas

	
				this.posY += this.vitesse
				break;

			case 4: //Vers la gauche 

				this.posX -= this.vitesse
				break;

		}

		//supprimer l'ancienne position 
		this.carte.context.clearRect(oldX,oldY,this.largeur,this.hauteur)

		//redéfinir le fond du canvas
		this.carte.set_background()


		//placer le personnage à la nouvelle position sur le canvas
		this.carte.context.drawImage(this.image,this.posX,this.posY)

		this.personnage.placer_personnage()


	}


	detecter_obstacle(p){

		//couleurs des murs et obstacles :
		//#000000ff6600 : orange
		//#0000000 : noir 
		//"#000000969696" : gris


		let x
		let y

		let tab_couleurs_interdites= ["#000000ff6600","#0000000"] //tableau contenant les couleurs des obstacles à ne pas franchir 

		switch(p){

			case 1: //Vérifier en haut

				x = this.posX
				y = this.posY - 1


				for(let i=x; i<x+19 ; i++){

					for(let j=y; j>y-this.vitesse; j--){

						var p = this.carte.context.getImageData(i, j, 1, 1).data
					    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
					
					    if(tab_couleurs_interdites.includes(hex)){

					 
				    		return hex 
				 	    }

					}

				}

				break;


			case 2: //Vérifier à droite

				x = this.posX + 20
				y = this.posY 

				for(let i=x; i<x+this.vitesse ; i++){

					for(let j=y; j<y+19; j++){

						var p = this.carte.context.getImageData(i, j, 1, 1).data
					    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
					
					    if(tab_couleurs_interdites.includes(hex)){

					
				    		return hex
				 	    }

					}

				}

				break;


			case 3: //vérifier en bas

				x = this.posX
				y = this.posY + 20


				for(let i=x; i<x+19 ; i++){

					for(let j=y; j<y+this.vitesse; j++){

						var p = this.carte.context.getImageData(i, j, 1, 1).data
					    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
					
					    if(tab_couleurs_interdites.includes(hex)){

				    		return hex
				 	    }

					}

				}

				break;

			case 4: //Vérifier à gauche

				x = this.posX - 1
				y = this.posY 

				for(let i=x; i>x-this.vitesse ; i--){

					for(let j=y; j<y+19; j++){

						var p = this.carte.context.getImageData(i, j, 1, 1).data
					    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
					
					    if(tab_couleurs_interdites.includes(hex)){

					
				    		return hex
				 	    }

					}

				}

				break;


		}

		return false 

	}



}
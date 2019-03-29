class personnage{


	constructor(name, icone, canvas, carte, x,y){

		this.name = name //nom du personnage

		this.carte = carte //la carte où est placé le personnage 

		this.image = new Image() //image du personnage
		this.image.src = icone //attribuer la source de l'icone à notre image
		this.image.crossOrigin = "Anonymous";

		this.posX = x //position X de l'image au début 
		this.posY = y//position Y de l'image au début 

		this.largeur = 20//Largeur de l'image en px
		this.hauteur = 20//hauteur de l'image en px

		this.life = 3 //niveau de vie par défaut
		this.vitesse =4//vitesse par défaut 
		this.invincible=false //pas invinsible par défaut 

	
	}



	detecter_obstacle(p){

		//couleurs des murs et obstacles :
		//#000000ff6600 : orange
		//#0000000 : noir 
		//"#000000969696" : gris


		let x
		let y

		let tab_couleurs_interdites= ["#000000ff6600","#0000000",
		"#000000f44029","#0000000f2f200","#000000aa00", "#0000001e2247", 
		"#0000007FFF00", "#000000000080"
		,"#00000031f745", "#00000016125e"] //tableau contenant les couleurs des obstacles à ne pas franchir 

		switch(p){

			case 1: //Vérifier en haut

				x = this.posX
				y = this.posY - 1


				for(let i=x; i<x+19 ; i++){

					for(let j=y; j>y-this.vitesse; j--){

						var p = this.carte.context.getImageData(i, j, 1, 1).data
					    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
					
					    if(tab_couleurs_interdites.includes(hex)){

					    
				    		this.changer_position(this.posX, j+1)
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

					    	//alert("obstacle détecté!")
				    		this.changer_position(i-20, this.posY)
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

					    
				    		this.changer_position(this.posX, j-20)
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

					    	//alert("obstacle détecté!")
				    		this.changer_position(i+1, this.posY)
				    		return hex
				 	    }

					}

				}

				break;


		}

		return false 

	}


	rgbHex(r,g,b){

		//convertir des valeurs rgb en hexadécimal 

		if(r > 255 || g > 255 || b > 255 ){

			return -1
		}

		return ((r<<16) | (g<<8) | b).toString(16);
	}




	placer_personnage(){

		//creer une image à partir de this.icone et la placer sur le canvas

		this.carte.context.drawImage(this.image,this.posX,this.posY, this.largeur, this.hauteur)

	}


	changer_position(x,y){

		//modifier les attributs posX et posY et placer le personnage aux nouvelles coordonnées

		this.posX = x
		this.posY = y

		this.carte.set_background()

		this.carte.context.drawImage(this.image,this.posX,this.posY, 20, 20)


		this.placer_autres()
	}

	placer_autres(){  	//replacer les autres personnages aux anciennes positions car ils ont été écrasés par le nouveau fond 

		P.placer_personnage()
		P2.placer_personnage()


		//vérifier si un obstacle se trouve sur la trajectoire 

		for(let i=0; i<tab_ennemis.length; i++){

			tab_ennemis[i].placer_personnage()
		}
		for(let i=0; i<tab_items.length; i++){

			tab_items[i].placer_item()
		}
		
	}

	deplacer(x){

	
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

		//supprimer effacer le canvas à l'ancienne position 
		this.carte.context.clearRect(oldX,oldY,this.largeur,this.hauteur)

		//redéfinir le fond du canvas
		this.carte.set_background()


		//placer le personnage à la nouvelle position sur le canvas
		this.carte.context.drawImage(this.image,this.posX,this.posY, 20, 20)


		this.placer_autres()


	}


	changer_vitesse(x){

		//modifier la vitesse de this 

		this.vitesse = x

	}









}
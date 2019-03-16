class personnage{


	constructor(name, icone, canvas){

		this.name = name //nom du personnage

		this.canvas = canvas  //canvas du jeu
		this.context = this.canvas.getContext('2d') //contexte du canvas
		this.canvas.crossOrigin = "Anonymous";

		this.image = new Image() //image du personnage
		this.image.src = icone //attribuer la source de l'icone à notre image
		this.image.crossOrigin = "Anonymous";

		this.posX = 350 //position X de l'image
		this.posY = 50 //position Y de l'image

		this.largeur = 20//Largeur de l'image en px
		this.hauteur = 20//hauteur de l'image en px

		this.life = 100 //niveau de vie par défaut
		this.vitesse =4//vitesse par défaut 
		

	}



	detecter_obstacle(p){

		//couleurs des murs et obstacles :
		//#000000ff6600 : orange
		//#0000000 : noir 


		let x
		let y

		let tab_couleurs = [] //tableau contenant les couleurs à proximité du personnage

		switch(p){

			case 1: //Vérifier en haut

				x = this.posX
				y = this.posY - 1

				for(let i=x; i<x+20 ; i++){

					for(let j=y; j<y-this.vitesse; j--){

						var p = this.context.getImageData(i, j, 1, 1).data
						console.log(i)
						console.log(j)
						console.log(this.posX + " " + this.posY)


					    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
					
					    if(!tab_couleurs.includes(hex)){

				    		tab_couleurs.push(hex)
				 	    }

					}

				}

				break;


			case 2: //Vérifier à droite

				x = this.posX + 20
				y= this.posY 


				for(let i=y; i<y+20 ; i++){

					var p = this.context.getImageData(x, i, 1, 1).data
				    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
				      
				
				
				    if(!tab_couleurs.includes(hex)){

				    	tab_couleurs.push(hex)
				    }

				}

				break;

			case 3: //vérifier en bas

				x = this.posX 
				y= this.posY + 21

				for(let i=x; i<x+20 ; i++){

					var p = this.context.getImageData(i, y, 1, 1).data
				    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
				
				
				
				    if(!tab_couleurs.includes(hex)){

				    	tab_couleurs.push(hex)
				    }

				}

				break;

			case 4: //Vérifier à gauche

				x = this.posX - 1
				y= this.posY

				for(let i=y; i<y+20 ; i++){

					var p = this.context.getImageData(x, i, 1, 1).data
				    var hex = "#" + ("000000" +  this.rgbHex(p[0],p[1],p[2]).slice(-6))
			
				
				    if(!tab_couleurs.includes(hex)){

				    	tab_couleurs.push(hex)
				    }

				}

				break;

		}


		return tab_couleurs.includes("#000000ff6600") || tab_couleurs.includes ("#0000000")

	}


	rgbHex(r,g,b){

		if(r > 255 || g > 255 || b > 255 ){

			return -1
		}

		return ((r<<16) | (g<<8) | b).toString(16);
	}

	set_background(){


		var bck = new Image()
		bck.src="img/background.png"

		this.context.drawImage(bck,0,0)

	}


	placer_personnage(){

		//creer une image à partir de this.icone et la placer sur le canvas

		this.set_background()
		this.context.drawImage(this.image,this.posX,this.posY)
		
	}


	changer_position(x,y){

		//modifier les attributs posX et posY et placer le personnage aux nouvelles coordonnées

		let oldX = this.posX
		let oldY = this.posY

		this.posX = x
		this.posY = y

		this.context.clearRect(oldX,oldY,this.largeur,this.hauteur)
		this.context.drawImage(this.image,this.posX,this.posY)

	}

	deplacer(x){

	//	console.log(this.detecter_obstacle())

		if (this.detecter_obstacle(x)){

			return 
		}

		//déplacer le personnage selon l'évènement déclenché 

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
		this.context.clearRect(oldX,oldY,this.largeur,this.hauteur)

		this.set_background()
		//placer le personnage à la nouvelle position sur le canvas
		this.context.drawImage(this.image,this.posX,this.posY)


	}


	remove_life(x){

		this.life-=x;
	}

	add_life(x){

		this.life +=x;
	}

	changer_vitesse(x){

		this.vitesse = x

	}







}
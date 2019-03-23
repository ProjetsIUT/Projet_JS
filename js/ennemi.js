class ennemi extends personnage{


	constructor(name, carte,x,y){

		super(name, "img/witch.png", document.getElementById("carte"), carte,x,y)

		this.direction = 1 //direction par défaut (vers le haut)

		var t = this;

		this.timer = setInterval(function(){t.deplacer();}, 100); //timer pour déplacer l'ennemi
		this.compteur = 0 //nombre de déplacements

	}



	deplacer(){

		//Deplacer l'ennemi de manière aléatoire 
		
		if(this.compteur > 8 ){ //au bout de x déplacement, changer la direction de l'ennemi 

			this.direction = Math.floor(Math.random() * 4 ) + 1
			this.compteur = 0

		}

		if(!P.invincible){

			this.detecter_personnage(this.direction)

		}

		//Détecter si un obstacle se trouve sur la trajectoire 

		if (this.detecter_obstacle(this.direction)){

			this.direction = Math.floor(Math.random() * 4 ) + 1
			this.carte.set_background()
			this.placer_autres()
			return
		}


		super.deplacer(this.direction)
		this.compteur ++ 


	}

	detecter_personnage(x){

		//Si l'obstacle rencontré correspond à la couleur du personnage
		if(this.detecter_obstacle(x)=="#000000f9ac2c"){

			P.remove_life(); //enlever 1 pt de vie au personage 
			return true;
		}

		
	}

	detecter_obstacle(p){

		//couleurs des murs et obstacles :
		//#000000ff6600 : orange
		//#0000000 : noir 
		//"#000000969696" : gris


		let x
		let y

		let tab_couleurs_interdites= ["#000000ff6600","#0000000","#000000f9ac2c"] //tableau contenant les couleurs des obstacles à ne pas franchir 

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
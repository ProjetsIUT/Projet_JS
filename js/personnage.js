class personnage{


	constructor(name, icone, canvas){

		this.name = name //nom du personnage
		this.canvas = canvas  //canvas du jeu
		this.context = this.canvas.getContext('2d') //contexte du canvas
		this.image = new Image() //image du personnage
		this.image.src = icone //attribuer la source de l'icone à notre image
		this.posX = 300 //position X de l'image
		this.posY = 500 //position Y de l'image
		this.largeur = 20 //Largeur de l'image en px
		this.hauteur = 20 //hauteur de l'image en px
		this.life = 100 //niveau de vie par défaut
		

	}



	placer_personnage(){

		//creer une image à partir de this.icone et la placer sur le canvas
		this.context.drawImage(this.image,300,500)
		
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

		//déplacer le personnage selon l'évènement déclenché 

		//sauvegarde des coordonnées actuelles pour supprimer
		let oldX = this.posX
		let oldY = this.posY

		switch(x){

			case 1:  //Vers le haut

				this.posY -= 1
		
			case 2: //Vers la droite

				this.posX += 1

			case 3: //Vers le bas

				this.posY += 1

			case 4: //Vers la gauche 

				this.posX -=1 

		}

		//supprimer l'ancienne position 
		this.context.clearRect(oldX,oldY,this.largeur,this.hauteur)
		
		//placer le personnage à la nouvelle position sur le canvas
		this.context.drawImage(this.image,this.posX,this.posY)

	}


	remove_life(x){

		this.life-=x;
	}

	add_life(x){

		this.life +=x;
	}







}
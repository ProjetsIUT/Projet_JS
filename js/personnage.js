class personnage{


	constructor(name, icone){

		this.name = name
		this.icone = icone
		
		this.life = 100
		
		//changer_position(300,500)

	}


	changer_position(x,y){

		this.posX = x
		this.posY = y

		this.icone.style.left = this.posX + "px"
		this.icone.style.top = this.posY + "px"

	}

	deplacer(x){

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

		this.icone.style.left = this.posX + "px"
		this.icone.style.top = this.posY + "px"
	}


	remove_life(x){

		this.life-=x;
	}

	add_life(x){

		this.life +=x;
	}







}
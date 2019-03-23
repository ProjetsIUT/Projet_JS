class player extends personnage{


	constructor(name, carte,x,y){

		super(name, "img/player.png", document.getElementById("carte"), carte,x,y)

	}

	deplacer(x){

		//déplacer le personnage selon l'évènement x

		if(!this.invincible){

			this.detecter_ennemi(x) //détecter si un ennemi se trouve sur le passage 

		}

		this.detecter_escalier(x) //détecter si le player a atteint l'escalier et gagné

		//vérifier si un obstacle se trouve sur la trajectoire 
		if (this.detecter_obstacle(x)){

			return 
		}

 	

		super.deplacer(x) //appel de la fonction déplacer de la classe personnage 

	}

	detecter_ennemi(x){

		let tab_couleurs_interdites= ["#000000f44029"] //tableau contenant les couleurs des ennemis


		for(let i=0; i<tab_couleurs_interdites.length; i++){

			if(this.detecter_obstacle(x)==tab_couleurs_interdites[i]){

				this.remove_life();
				return true;
			}

		}
		
	}

	detecter_escalier(x){

		if(this.detecter_obstacle(x)=="#000000aa00"){

			this.gagner()
		}

		
	}


	devenir_invincible(x){

		//devenir invisible pour un temps de x millisecondes

		this.invincible = true 
		var t = this
		setTimeout(function(){t.invincible=false;},x)
	}


	remove_life(){

		//soustraire 1 points de vie à this

		let lifes = document.getElementById("life")
		let children = lifes.children
		life.removeChild(children[children.length-1])

		if(this.life-1==0){

			this.mourrir()
			return
		}

		this.life--
		this.devenir_invincible(3000)


	}

	add_life(){

		//ajouter 1 points de vie à this

		this.life ++;
	}

	mourrir(){

		//fin de la partie, perdue
		alert("C'était pourtant facile")
		document.location.reload()
	}

	gagner(){

		//fin de la partie, gagné
		alert("Bravo vous avez gagné !")
		document.location.reload()

	}





}
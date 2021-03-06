class player extends personnage{


	constructor(name, carte,x,y){
		if(name == "Joueur2"){
		super(name, "img/player2.png", document.getElementById("carte"), carte,x,y)

		}else{
			super(name, "img/player.png", document.getElementById("carte"), carte,x,y)

		}
		this.dead = 0
		
	}

	deplacer(x){

		//déplacer le personnage selon l'évènement x

		if(!this.invincible){

			this.detecter_ennemi(x) //détecter si un ennemi se trouve sur le passage 

		}

		this.detecter_escalier(x) //détecter si le player a atteint l'escalier et gagné
		this.detecter_item(x)
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
			var bruit = new Audio();
    		bruit.src = "son/gr.wav"
   			bruit.play();
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

	detecter_item(x){

		if(this.detecter_obstacle(x)=="#00000031f745"){
			
			var bruit = new Audio();
    		bruit.src = "son/yea.wav"
   			bruit.play();
			this.add_life()

		}
		if(this.detecter_obstacle(x)=="#0000001e2247"){
			this.vitesse = 13
			var bruit = new Audio();
    		bruit.src = "son/yea.wav"
   			bruit.play();
			
		}
		if(this.detecter_obstacle(x)=="#00000016125e"){
			var bruit = new Audio();
    		bruit.src = "son/blbl.wav"
   			bruit.play();
			this.vitesse = 3
	
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

		if(this.name=="Joueur1"){
			let lifes = document.getElementById("heart")
			let children = lifes.children
			lifes.removeChild(children[children.length-1])
		}else{
			let lifesUn = document.getElementById("heartUn")
			let childrenUn = lifesUn.children
			lifesUn.removeChild(childrenUn[childrenUn.length-1])
		}

		if(this.life-1==0){

			this.mourrir()
			return
		}

		this.life--
		this.devenir_invincible(3000)


	}

	add_life(){

		//ajouter 1 points de vie à this

		if (this.life+1 < 4){
			this.life++

			if(this.name=="Joueur1"){
				let lifes = document.getElementById("heart")
				let img = document.createElement("img")
	    		img.id = "heart_ajout"
	   			img.src = "img/heart.png"
	    		lifes.appendChild(img)
			}else{
				let lifesUn = document.getElementById("heartUn")
				let img = document.createElement("img")
	    		img.id = "heart_ajout"
	   			img.src = "img/heart.png"
	    		lifesUn.appendChild(img)
			}
		}
		

		
	}

	mourrir(){
			var bruit = new Audio();
    		bruit.src = "son/blbl.wav"
   			bruit.play();
   			this.dead = 1
		//fin de la partie, perdue
		if(P.dead == 1 && P2.dead == 1){

			let lck = Math.floor(Math.random() * 3)//random entre 0 et 9
			if(lck == 0){
				alert("C'était pourtant facile")
			}
			else if(lck == 1){
				alert("Il faut connecter ses neurones")
			}
			else if(lck == 2){
				alert("Essaie encore")
			}
			else if(lck == 3){
				alert("On enfonce des portes ouvertes")
			}
			document.location.reload()
		}
		
	}

	gagner(){

		//fin de la partie, gagné
		alert("Bravo vous avez gagné !")
		document.location.reload()

	}





}
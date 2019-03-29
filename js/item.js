class item {

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


	
	}

	placer_item(){

		this.carte.context.drawImage(this.image,this.posX,this.posY, this.largeur, this.hauteur)

	}
	detecter_personnage(x){

		//Si l'obstacle rencontré correspond à la couleur du personnage
		console.log('test')
		if(this.detecter_obstacle(x)=="#000000f96018"){
			console.log('oui')
			P.vitesse++; //enlever 1 pt de vie au personage 
			return true;
		}



		
	}
























}
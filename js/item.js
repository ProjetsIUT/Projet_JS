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


	choixItemPosition(i){

		if (this.itemtab[i]=='chest'){
			var x=Mathrandom()*(20-1)+1
				if(x==19 || x==20 || x==1 || x==3 ){
					this.posY=534
					if(x==19){
						this.posX=90
					} else{
						if(x==20){
							this.posX=222
						} else {
							if(x==1){
								this.posX=330
							} else {
								if(x==2){
									this.posX=442
								} else{
									if(x==3){
										this.posX=542
									}
								}
							}
						}
					}
				}
		}










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
class Item {

	constructor(name, icone, carte){

		this.name = name //nom de l'item
		this.carte = carte
		this.image = new Image() //image de l'item
		this.image.src = icone //attribuer la source de l'icone à notre image
		
		this.posX = Math.random() * (this.canvas.width - 0) + 0//position X de l'image
		this.posY = Math.random() * (this.canvas.height - 0) + 0 //position Y de l'image
		this.largeur = 20 //Largeur de l'image en px
		this.hauteur = 20 //hauteur de l'image en px
		

	}

	placer_item(){

		this.carte.context.drawImage(this.image,this.posX,this.posY)

	}


























}
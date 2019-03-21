class Item {

	constructor(name, icone, canvas){

		this.name = name //nom de l'item
		this.canvas = canvas  //canvas du jeu
		this.context = this.canvas.getContext('2d') //contexte du canvas
		this.image = new Image() //image de l'item
		this.image.src = icone //attribuer la source de l'icone à notre image
		this.tabSalle= {}
		this.posX = Math.random() * (this.canvas.width - 0) + 0//position X de l'image
		this.posY = Math.random() * (this.canvas.height - 0) + 0 //position Y de l'image
		this.largeur = 20 //Largeur de l'image en px
		this.hauteur = 20 //hauteur de l'image en px
		

	}


























}
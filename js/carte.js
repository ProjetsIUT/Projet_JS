class carte {

	constructor(canvas){

		this.canvas = canvas //le canvas où se déroule jeu 
		this.context = this.canvas.getContext('2d') //contexte du canvas
		this.canvas.crossOrigin = "Anonymous"

	}

	set_background(){

		//établir l'image de la carte du batîment K 

		var bck = new Image()
		bck.src="img/background.png"

		this.context.drawImage(bck,0,0)

	}


}

  
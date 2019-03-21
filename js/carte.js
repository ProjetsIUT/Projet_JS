class carte {



	constructor(canvas){

		this.canvas = canvas //le canvas où se déroule jeu 
		this.context = this.canvas.getContext('2d') //contexte du canvas
		this.canvas.crossOrigin = "Anonymous"
		this.items = {}

	}

	add_item(item){

		this.items.push(item);

	}

	remove_item(item){

		//suprimer un item de la table des items

		for(let i=0; i<items.length; i++){

			if(this.items[i]==item){

				this.items.splice(i,1)
			}
		}

	}

	item_here(x,y){

		//vérifier si un item 

	}




	set_background(){

		//établir l'image de la carte du batîment K 

		var bck = new Image()
		bck.src="img/background.png"

		this.context.drawImage(bck,0,0)

	}


}

  
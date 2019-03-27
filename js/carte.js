class carte {



	constructor(canvas){

		this.canvas = canvas //le canvas où se déroule jeu 
		this.context = this.canvas.getContext('2d') //contexte du canvas
		this.canvas.crossOrigin = "Anonymous"
		this.items = {} //table des items sur la carte 

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

		//vérifier si un item se trouve aux coordonnées x,y

		for(let i=0; i<this.items.length; i++){

			if(this.items[i].posX==x && this.items[i].posY==y){

				return this.items[i]
			}

		}

		return false

	}


	set_background(background,x,y){

		if(!background){

			//établir l'image de la carte du batîment K au début de la partie

			var bck = new Image()
			bck.src="img/background.png"

			this.context.drawImage(bck,0,0)

		}else{

			this.context.putImageData(background,x,y)


		}




	}

	



}







  
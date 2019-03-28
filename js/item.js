class Item {

	constructor(name, icone, carte){

		this.name = name //nom de l'item
		this.carte = carte
		this.image = new Image() //image de l'item
		this.image.src = icone //attribuer la source de l'icone à notre image
		this.posX = 0//position X de l'image
		this.posY =  0//position Y de l'image
		this.largeur = 20 //Largeur de l'image en px
		this.hauteur = 20 //hauteur de l'image en px
		this.itemtab={'chest','heart','key','shield'}	
		this.tabSalle=new Array(32)
		for(int i=0 ; i<32; i++){
			tabSalle[i]=new Array(2)
		}

		

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

		this.carte.context.drawImage(this.image,this.posX,this.posY)

	}



























}
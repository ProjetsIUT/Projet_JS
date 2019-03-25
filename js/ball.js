class ball {
    constructor(canvas){

		this.canvas = canvas  //canvas du jeu
		this.context = this.canvas.getContext('2d') //contexte du canvas
		this.posX = 20 //position X de l'image
        this.posY = 20 //position Y de l'image
        this.vitesseY = 5;
        this.vitesseX = 5;
		

	}

    /*drawBall() {
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, 10, 0, Math.PI*2);
        this.context.fillStyle = "red";
        this.context.fill();
        this.context.closePath();
    }*/
    
    detectercol(){
        return false
    }


	deplacer(){

		//déplacer le personnage selon l'évènement déclenché 

		//sauvegarde des coordonnées actuelles pour supprimer
		//let oldX = this.posX
        //let oldY = this.posY
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, 10, 0, Math.PI*2);
        this.context.fillStyle = "red";
        this.context.fill();
        this.context.closePath();

            if(this.detectercol == false){
                this.posY += this.vitesseY
                this.posX += this.vitesseX
            }else{
                this.vitesseX = -this.vitesseX;
                this.vitesseY = -this.vitesseY;
            }
			
        

		//supprimer l'ancienne position 
		//this.context.clearRect(oldX,oldY,20,20)
		
		//placer le personnage à la nouvelle position sur le canvas

	}
}
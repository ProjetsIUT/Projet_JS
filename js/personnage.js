class personnage{


	constructor(name, icone){

		this.name = name;
		this.icone=icone;
		
		this.life = 100;
		this.posX = 0;
		this.posY = 0; 

	}

	changer_position(x,y){

		this.posX = x;
		this.posY = y;

	}







}
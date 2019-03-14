class player extends personnage{

	constructor(name,icone){

		super(name,icone)
	}

	remove_life(x){

		this.life-=x;
	}

	add_life(x){

		this.life +=x;
	}



}
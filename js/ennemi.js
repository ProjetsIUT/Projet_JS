class ennemi extends personnage{


	constructor(name,icone){

		super(name,icone)

	}

	afficher_laser(){

		this.icone = this.icone + "_laser"

	}

	cacher_laser(){

		this.icone = this.icone.replace("_laser","");
	}




}
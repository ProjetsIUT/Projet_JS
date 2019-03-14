class ennemi extends personnage{


	constructor(name){

		super(name, document.getElementById("ennemi"))


	}

	afficher_laser(){

		this.icone = this.icone + "_laser"

	}

	cacher_laser(){

		this.icone = this.icone.replace("_laser","");
	}




}
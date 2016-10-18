export default class{
		// Création de la classe Student
		/**
		 * Represente une couleur dans la palette
		 * @param  {string} Prénom de l'élève
		 * @return {string}  Nom de l'élève
		 */
		constructor(prenom, nom, pics){
			this.prenom 	= 	prenom;
			this.nom	= 	nom;
			this.pics		= 	pics || 'img/h.png';
		}
	}


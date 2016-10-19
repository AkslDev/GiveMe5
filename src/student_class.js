export default class{
		// Création de la classe Student
		/**
		 * Represente un Eleve
		 * @param  {string} Prénom de l'élève
		 * @return {string}  Nom de l'élève
		 * @param  {number} Points de l'élève
		 */
		constructor(prenom, nom, points, pics){
			this.prenom 	= 	prenom;
			this.nom	= 	nom;
			this.points 	= 	points || 0;
			this.pics		= 	pics || 'img/h.png';
		}
	}


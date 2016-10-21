// Importation de student-class.js
import Student from './student_class';
import studentlist from './student_list';
import studentmodif from './student_modif';
import studentpoints from './student_points';


console.log('GiveMeFive est lancé');

let giveme5 = {

	// Fonction Init
	init: function (){

		// Eleves de la classe
		let students =  [
			// new Student ('Stan', 'Xiong',0,),
			// new Student ('Mattieu', 'Vendeville',0,),
			// new Student ('Clément', 'Teboul',0,),
			// new Student ('Pierre', 'Saigot',0,),
			// new Student ('Félix', 'Nahon',0,),
			// new Student ('Victor', 'Mouton',0,),
			// new Student ('Bastien', 'Luhaire',0,),
			// new Student ('Julien', 'Gastineau',0,),
			// new Student ('Clément', 'Dussol',0,),
			new Student ('Aksl', 'Cqn',0,'img/axel.jpg'),
			new Student ('Loan', 'Campan',0),
			new Student ('Joel', 'Alves',0)
		]
		console.log('Liste des élèves chargée');
		studentlist(students);
		studentmodif(students);
		// studentpoints(students);
	}
}

	giveme5.init();
// Importation de student-class.js
import Student from './student_class';
import studentlist from './student_list';

console.log('GiveMeFive est lancé');

let giveme5 = {

	// Fonction Init
	init: function (){

		// Eleves de la classe
		let students =  [
			new Student ('Aksl', 'Cqn',23,'img/axel.jpg'),
			new Student ('Aksl', 'Cqn',25,'img/axel.jpg'),
		]
		console.log('Liste des élèves chargée');
		studentlist(students);
	}
}

	giveme5.init();


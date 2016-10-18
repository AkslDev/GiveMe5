// Importation de student-class.js
import Student from './student_class';
import studentlist from './student_list';

console.log('GiveMeFive est lancé');

let giveme5 = {

	// Fonction Init
	init: function (){

		// Eleves de la classe
		let students =  [
			new Student ('Aksl', 'Cqn','img/axel.jpg'),
			new Student ('Clement', 'Teboul'),
			new Student ('Victor', 'Sheep')
		]
		studentlist(students);
	}

}

	giveme5.init();


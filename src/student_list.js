
// ****** Appel de jQuery ******
let $ = require("jquery");

// ****** Importation de ma classe Student ******
import Student from './student_class';

// Fonction pour créer une carte
function creer_card(student, $original, id){

	let 	clone = $original.clone();
			clone.removeAttr('id');
			clone.attr('id', id)

			clone.children('h4').text(student.prenom+' '+student.nom);
			clone.children('p').text(student.points+' pts');
			clone.children('.userimg').css('background-image', 'url('+student.pics+')');
			clone.appendTo('#userlist');
		// Fonction pour ajouté ou retirer des points
	clone.find('.present').on('click', function(){
		student.points += 10;
		clone.children('p').text(student.points+' pts');
	});
	clone.find('.abs').on('click', function(){
		student.points -= 10;
		clone.children('p').text(student.points+' pts');
	});
	clone.find('.late').on('click', function(){
		student.points -= 2;
		clone.children('p').text(student.points+' pts');
	});
}

// Function pour ajouter un élève lors d'un clic sur le bouton
export default function(students) {

	let $original = $('#user').detach();

	// Boucle pour ajouté un élève
	for (let i = students.length - 1; i >= 0; i--) {
		creer_card(students[i], $original, i);
	}

	let new_user_id = students.length += 1;

// ************************************************************
	// Fonction onClick pour modifier un élève
	$(".student").on('click', function() {
		console.log("ca marche");
		$('#modif').removeClass('dispnone');
		let 	profil_id 	=	this.id,
			prenom 	=	students[profil_id].prenom,
			nom 		=	students[profil_id].nom,
			points 		=	students[profil_id].points,
		           pics               	=	students[profil_id].pics,
			modif		=	$('#modif');
		modif.children('.modifuserimg').css('background-image', 'url('+students[profil_id].pics+')');
		modif.children('h4').text(students[profil_id].prenom+' '+students[profil_id].nom);
		modif.children('p').text(students[profil_id].points+' pts');
	});

	// Fonction click pour faire apparaitre/disparaitre le form
	$('#add').on('click', function() {
		$('#create').removeClass('dispnone');
	});
	// .onclick pour créer un élève
	$('#submit').on('click', function() {

		$('#create').addClass('dispnone');

		let 	prenom	= 	$('#firstname').val(),
			nom		= 	$('#lastname').val(),
			id		= 	new_user_id,
		 	eleve 		= 	new Student(prenom, nom, id);

			students.push(eleve);
			creer_card(eleve, $original, id);
	});
}
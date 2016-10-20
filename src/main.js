export default function(interface){

	// Fonction click pour faire apparaitre/disparaitre le form
	$('#add').on('click', function() {
		$('#create').removeClass('dispnone');
	});
	// .onclick pour créer un élève
	$('#submit').on('click', function() {

		$('#create').addClass('dispnone');
		let 	prenom	= 	$('#firstname').val(),
			nom		= 	$('#lastname').val(),
			id		= 	$
		 	eleve 		= 	new Student (prenom, nom, id);
		 				$original.attr('id', id);
			students.push(eleve);
			creer_card(eleve, $original);
	});

}	
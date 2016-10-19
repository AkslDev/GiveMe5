let $ = require("jquery");

export default function(students) {

	let $original = $('#user').detach();

	for (let i = students.length - 1; i >= 0; i--) {
		
		let 	clone = $original.clone();
			clone.removeAttr('id');
			clone.attr('id',i)

			clone.children('h4').text(students[i].prenom+' '+students[i].nom);
			clone.children('.userimg').css('background-image', 'url('+students[i].pics+')')
			clone.appendTo('#userlist')
	}

	$("#add").on('click', function(){
		$original.clone().appendTo('#userlist')
		console.log('Eleve ajouté');
	});

	$(".student").mousedown(function(event) {
		$("#modif").removeClass('dispnone');
		
		let 	profil_id 	= this.id,
			prenom 	= students[profil_id].prenom,
			nom 		= students[profil_id].nom,
			points 		= students[profil_id].points,
		           pics               	= students[profil_id].pics,
			modif		= $('#modif');

		modif.children('.modifuserimg').css('background-image', 'url('+students[profil_id].pics+')');
		modif.children('h4').text(students[profil_id].prenom+' '+students[profil_id].nom);
		modif.children('p').text(students[profil_id].points+' pts');
	

	});
}


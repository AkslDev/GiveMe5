let $ = require("jquery");

export default function(students) {

	let $original = $('#user').detach();

	for (let i = students.length - 1; i >= 0; i--) {
		
		let 	clone = $original.clone();
			clone.removeAttr('id');

			clone.children('h4').text(students[i].prenom+' '+students[i].nom);
			clone.children('.userimg').css('background-image', 'url('+students[i].pics+')')
			clone.appendTo('#userlist')
	}

	$("#add").on('click', function(){
		$original.clone().appendTo('#userlist')
		console.log('Eleve ajouté');
	});
}

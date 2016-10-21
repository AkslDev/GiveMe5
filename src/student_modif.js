let $ = require("jquery");

export default function (studentmodif){

	$(".student").on('click', function() {
		$('#modif').removeClass('dispnone');
		let 	profil_id 	=	this.id,
			prenom 	=	studentmodif[profil_id].prenom,
			nom 		=	studentmodif[profil_id].nom,
			points 		=	studentmodif[profil_id].points,
		           pics               	=	studentmodif[profil_id].pics,
			modif		=	$('#modif');
			
		modif.children('.modifuserimg').css('background-image', 'url('+studentmodif[profil_id].pics+')');
		modif.children('h4').text(studentmodif[profil_id].prenom+' '+studentmodif[profil_id].nom);
		modif.children('p').text(studentmodif[profil_id].points+' pts');
	});


}
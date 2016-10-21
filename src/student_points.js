
let $ = require("jquery");

export default function(studentpoints){
	for (var i = studentpoints.length - 1; i >= 0; i--) {
		studentpoints[i]

			// Fonction pour ajouté ou retirer des points
	$('#pres').on('click', function(){
		console.log('Marche');
		studentpoints.points += 10;
		$('#points').text(studentpoints[i].points+' pts');
		console.log('points ajouté');
	});
	$('#abs').on('click', function(){
		studentpoints.points -= 10;
		$('#points').text(studentpoints[i].points+' pts');
	});
	$('#late').on('click', function(){
		studentpoints.points -= 2;
		$('#points').text(studentpoints[i].points+' pts');
	});
	}
	// let 	modif	= $('#modif');


}
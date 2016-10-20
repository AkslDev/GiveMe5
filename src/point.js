export default function(points){
		// Fonctions pour ajouter ou retirer des points depuis les cards
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
		// Fonctions pour ajouter ou retirer des points depuis le panel modif cards
		$('#modif').find('.present').on('click', function(){
			student.points += 10;
			clone.children('p').text(student.points+' pts');
		});
}
$(function() {
	$('form').on('submit', function(event) {
        event.preventDefault()
    });

	$('.btn-send').on('click enterKey', function(){
		var person = {
			'name': $('#name').val(),
			'phone': $('#phone').val(),
		};

		$.ajax({
			url: 'https://#/php/send.php',
			type: 'POST',
			data: person,
			success: function(res){
			console.log(res);
			}
		});
	});
});
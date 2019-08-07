$(function() {
	$("#phone").mask("+7 (999) 999-99-99");

	$('form').on('submit', function(event) {
        event.preventDefault()
    });

	$('#btn-send').on('click enterKey', function(){
		var person = {
			'name': $('#name').val(),
			'phone': $('#phone').val(),
			'email': $('#email').val(),
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
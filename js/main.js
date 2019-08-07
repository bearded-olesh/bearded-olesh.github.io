$(function() {

	// preloader
	$('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');

	// phone mask
	$('[name=phone]').mask("+7 (999) 999-99-99");

	// отмена действия по умолчанию
	$('form').on('submit', function(event) {
        event.preventDefault()
    });

	// отправка заявки
	$('.btn-send').on('click enterKey', function(){

		var elem = $(this).parent().parent(),
			name = elem.find('[name=name]').val(),
			phone = elem.find('[name=phone]').val(),
			email = elem.find('[name=email]').val(),
			person = {
				'name': name,
				'phone': phone,
				'email': email,
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

	$('form.feedback__form').on('submit', function(){
		$('#feedback-modal').modal('hide');
		setTimeout(function() {
			$('#feedback-modal_success').modal('show');
		}, 450);
	});
});


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
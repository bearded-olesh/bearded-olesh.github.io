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

// Example starter JavaScript for disabling form submissions if there are invalid fields
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
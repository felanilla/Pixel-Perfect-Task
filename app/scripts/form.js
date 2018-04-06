var FORM = {
    
    init: function() {

			var $form = $("#contact-form"),
				$successMsg = $(".alert"),
				$input = $("input");
			$.validator.addMethod("letters", function(value, element) {
			return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
			});
			$form.validate({
			rules: {
				name: {
				required: true,
				minlength: 3,
				letters: true
				},
				number: {
				required: true,
				number: true
				}
			},
			messages: {
				name: "Przedstaw się.",
				number: "Wpisz liczbę."
			},
			submitHandler: function() {
				$input.fadeOut();
				var ticketsAmount = document.getElementById("number").value;
				document.getElementsByClassName("tickets-amount")[0].innerHTML = ticketsAmount * 20;
				setTimeout(function(){
					$successMsg.fadeIn();
				}, 1000);
			}
		});

		$(".top-row__copy").click(function() {
			$('html,body').animate({
				scrollTop: $(".form-row").offset().top},
				'slow');
		});

    }

};

module.exports = {
    init : FORM.init
};
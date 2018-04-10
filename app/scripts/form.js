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

		function anchorLinkHandler(e) {
			const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
		
			e.preventDefault();
			const targetID = this.getAttribute("href");
			const targetAnchor = document.querySelector(targetID);
			if (!targetAnchor) return;
			const originalTop = distanceToTop(targetAnchor);
		
			window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
		
			const checkIfDone = setInterval(function() {
				const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
				if (distanceToTop(targetAnchor) === 0 || atBottom) {
					targetAnchor.tabIndex = "-1";
					targetAnchor.focus();
					window.history.pushState("", "", targetID);
					clearInterval(checkIfDone);
				}
			}, 100);
		}
		
		const linksToAnchors = document.querySelectorAll('a[href^="#"]');
		linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

    }

};

module.exports = {
    init : FORM.init
};
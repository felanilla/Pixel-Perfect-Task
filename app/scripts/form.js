var FORM = {
    
    init: function() {

		//Form validation

		const submitBtn = document.getElementById('submit'),
			  inputName = document.getElementById('name'),
			  inputNumber =  document.getElementById('number');

		inputNumber.addEventListener('keyup', function(e) {
			let ticketAmount = document.getElementById('tickets-amount');
			if(!isNaN(inputNumber.value)) {
				ticketAmount.innerHTML = inputNumber.value * 20					
			}
		})

		submitBtn.addEventListener('click', function(e) {
			e.preventDefault();
			let inputNameVal = document.getElementById('name').value,
				inputNumberVal =  document.getElementById('number').value,
				errName = document.getElementById('error-name'),
				errNumber = document.getElementById('error-number'),
				nameCanSubmit = false,
				numberCanSubmit = false;

			function checkName() {
				if (inputNameVal == "" || !isNaN(inputNameVal) || !inputNameVal.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
					errName.style.display = "block";
					nameCanSubmit = false;
				} else {
					errName.style.display = "none";
					nameCanSubmit = true;
				}
			}
			checkName()
	
			function checkNumber() {
				if (inputNumberVal == "" || !inputNumberVal.match(/[0-9]/)) {
					errNumber.style.display = "block";
					numberCanSubmit = false;
				} else {
					errNumber.style.display = "none";
					numberCanSubmit = true;
				} 
			}
			checkNumber()

			if (nameCanSubmit && numberCanSubmit) {
				let formInputs = document.querySelectorAll('input');
				for (var i = 0; i < formInputs.length; ++i) {
					formInputs[i].style.display = "none";
				}
				
				setTimeout(function(){ 
					document.getElementById('alert-success').setAttribute("class", "show");
				}, 
				1000);
			} 
		});

		//Scroll to

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
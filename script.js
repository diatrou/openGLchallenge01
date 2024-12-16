document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    // const submitButton = document.getElementById('submit-button');
    // const submissionForm = document.getElementById('submission-form');
	const googleFormDiv = document.querySelector('.google-form');
	const submissionTitle = document.getElementById('submission-title');

    // let startTime = localStorage.getItem('startTime');
    // if (!startTime) {
        // startTime = new Date().getTime();
        // localStorage.setItem('startTime', startTime);
    // }

    // const deadline = parseInt(startTime) + 24 * 60 * 60 * 1000;
	
	const deadline = new Date('2024-12-17T11:59:59').getTime();

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = deadline - now;

        
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} ημέρες ${hours} ώρες ${minutes} λεπτά και ${seconds} δεπτερόλεπτα`;

	
		if (distance < 0) { 
			clearInterval(interval); 
			countdownElement.innerHTML = "Η προθεσμία έχει λήξει"; 
			googleFormDiv.style.display = 'none'; 
			// if (submitButton) { 
				// submitButton.disabled = true; 
			// } 
			// if (submissionForm) { 
				// submissionForm.style.display = 'none'; 
			// } 
			if (submissionTitle) { 
				submissionTitle.style.display = 'none'; 
			}
		} 
	}, 1000);
});



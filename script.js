document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); on

   
    const formData = new FormData(this);

    
    fetch('send_message.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        
        const formResponse = document.getElementById('form-response');
        formResponse.classList.remove('hidden');
        formResponse.textContent = data;
        formResponse.style.color = 'green'; 

        
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        const formResponse = document.getElementById('form-response');
        formResponse.classList.remove('hidden');
        formResponse.textContent = 'Sorry, there was an error sending your message. Please try again later.';
        formResponse.style.color = 'red'; 
    });
});

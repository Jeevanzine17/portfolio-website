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

let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Function to change slide
function changeSlide(direction) {
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Auto-play functionality
function autoPlay() {
    changeSlide(1); // Go to the next slide
    setTimeout(autoPlay, 3000); // Change every 3 seconds
}

// Event listeners for buttons
prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

// Initialize the slideshow
showSlide(slideIndex);
autoPlay();

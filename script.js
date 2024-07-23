document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

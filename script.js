document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        if (validateEmail(email)) {
            // Create a FormData object to send data to the server
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);

            // Send data to the server
            fetch('contact_form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                if (result.trim() === 'Message sent successfully!') {
                    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
                    document.getElementById('contactForm').reset();
                } else {
                    alert('Failed to send your message. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to validate the email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    const errorMessage = document.getElementById('errorMessage');

    // Username validation (no numbers)
    for (let i = 0; i < username.length; i++) {
        if (!isNaN(username[i])) {
            errorMessage.textContent = 'Username should not contain any numbers.';
            errorMessage.style.display = 'block';
            return;
        }
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }

    // Phone number validation (only numbers)
    for (let i = 0; i < phoneNumber.length; i++) {
        if (isNaN(phoneNumber[i])) {
            errorMessage.textContent = 'Phone number should only contain numbers.';
            errorMessage.style.display = 'block';
            return;
        }
    }

    // Password validation (alphanumeric, > 8 chars, upper and lower case)
    if (password.length <= 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        errorMessage.textContent = 'Password must be alphanumeric, more than 8 characters, and contain both upper and lower case letters.';
        errorMessage.style.display = 'block';
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
        return;
    }

    // Terms validation
    if (!terms) {
        errorMessage.textContent = 'You must agree to the terms and services.';
        errorMessage.style.display = 'block';
        return;
    }

    // Save user's name
    localStorage.setItem('username', username);

    // Redirect to home page (or any other page)
    window.location.href = 'home.html';
});

// Display user's name if logged in
window.addEventListener('load', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('userGreeting').textContent = `Hello, ${username}`;
    }
});

function validateData(event) {
    event.preventDefault();

    var username = document.getElementById("namaTF").value;
    var email = document.getElementById("emailTF").value;
    var phone = document.getElementById("telTF").value;
    var password = document.getElementById("passwordTF").value;
    var confirmPassword = document.getElementById("confpasswordTF").value;
    var terms = document.getElementById("terms").checked;

    if (username.length < 6) {
        alert("Username must be at least 6 characters long!");
    } else if (!validateEmail(email)) {
        alert("Invalid email format!");
    } else if (!validatePhoneNumber(phone)) {
        alert("Phone number must be 10 digits!");
    } else if (!checkAlphaNum(password)) {
        alert("Password must contain both alphabets and numbers!");
    } else if (confirmPassword !== password) {
        alert("Password and Confirm Password must match!");
    } else if (!terms) {
        alert("You must agree to the terms and services!");
    } else {
        alert("Success!");
        window.location.href = "../index.html"; 
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhoneNumber(phone) {
    var re = /^\d{8,}$/;
    return re.test(phone);
}

function checkAlphaNum(password) {
    var isAlpha = false;
    var isNum = false;

    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            isAlpha = true;
        } else {
            isNum = true;
        }

        if (isAlpha && isNum) {
            return true;
        }
    }

    return false;
}

// Login Validation
function validateLogin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" || password === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Login Successful");
    return true;
}

// Register Validation
function validateRegister() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields");
        return false;
    }

    if(password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful");
    return true;
}
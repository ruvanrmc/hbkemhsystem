
const validUsername = "N17005";
const validPassword = "abu-nakhla";

function validateLogin(event) {
    event.preventDefault();  
   
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
        window.location.href = "01-medical-leave.html"; 
    } else {
        errorMessage.textContent = "Invalid Username or Password!";
    }
}
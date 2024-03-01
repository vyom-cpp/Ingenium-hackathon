document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login-form");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            
            window.location.href = "bot.html"; 
        } else {
            alert("Please fill in both email and password fields.");
        }
    });
});

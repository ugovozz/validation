const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');

confirmPassword.addEventListener('blur', ($event) => {
    if (passwordInput.value !== confirmPassword.value) {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        confirmPassword.style.border = "thin solid green";
    }
});
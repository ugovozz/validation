const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

passwordInput.addEventListener('input', ($event) => {

    if ($event.target.value.length > 5 && $event.target.value.length < 13) {
        submitButton.removeAttribute('disabled');
    } else if ($event.target.value.length < 6 || $event.target.value.length > 12) {

        if (submitButton.disable != true) {
            console.log("EVENTO");
            submitButton.setAttribute('disabled', true);
        }

    }
});
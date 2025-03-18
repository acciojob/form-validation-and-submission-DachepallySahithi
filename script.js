//your JS code here. If required.
const termsCheckbox = document.getElementById('terms');
    const submitButton = document.getElementById('submitBtn');
    const form = document.getElementById('myForm');

    termsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });

    form.addEventListener('submit', function(event) {
        if (!termsCheckbox.checked) {
            event.preventDefault(); // Prevent form submission if terms are not accepted
            alert("Please accept the terms and conditions.");
        }
    });
document.addEventListener("DOMContentLoaded", function() {
    const countryDropdown = document.getElementById("country");
   
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.code; 
    option.text = country.name;
    countryDropdown.add(option);
});


const form = document.getElementById("registrationForm");
const submitButton = document.getElementById("submitButton");
const welcomeMessage = document.getElementById("welcomeMessage");

form.addEventListener("input", function () {
    
    const isUsernameValid = form.username.value.trim() !== "";
    const isPasswordValid = form.password.value.length >= 12;
    const isConfirmPasswordValid = form.confirmPassword.value === form.password.value;
    const acceptTermsChecked = form.acceptTerms.checked;
    const isCountrySelected = form.country.value !== "";

    submitButton.disabled = !(isUsernameValid && isPasswordValid && isConfirmPasswordValid && acceptTermsChecked && isCountrySelected);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    welcomeMessage.textContent = `Welcome ${form.username.value}! The country code you selected is ${form.country.value}`;
    welcomeMessage.style.display = "block";

    
});
});
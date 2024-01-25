const form = document.forms.registrationForm;
const inputName = form.elements.inputName;
const inputEmail = form.elements.inputEmail;
const inputAge = form.elements.inputAge;
const inputGender = form.elements.inputGender;
const inputJob = form.elements.inputJob;
const inputPassword = form.elements.inputPassword;
const inputConsent = form.elements.inputConsent;
const submitBtn = form.elements.submitBtn;
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const ageError = document.querySelector("#ageError");
const genderError = document.querySelector("#genderError");
const jobError = document.querySelector("#jobError");
const passwordError = document.querySelector("#passwordError");
const consentError = document.querySelector("#consentError");
const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d._]+$/;
submitBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    let hasError = false;
    if (inputName.value.trim() === "") {
        nameError.textContent = "Введите ваше имя";
        hasError = true;
    } else if (inputName.value.length > 20 || inputName.value.length < 2) {
        nameError.textContent = "Длина имени должна быть от 2 до 20 символов";
        hasError = true;
    } else if (!nameRegex.test(inputName.value)) {
        nameError.textContent = "Имя должно содержать только буквы и пробелы";
        hasError = true;
    } else {
        nameError.textContent = "";
    }
    if (inputEmail.value.trim() === "") {
        emailError.textContent = "Введите ваш email";
        hasError = true;
    } else if (!emailRegex.test(inputEmail.value)) {
        emailError.textContent = "Введите корректный email";
        hasError = true;
    } else {
        emailError.textContent = "";
    }
    if (inputAge.value === "") {
        ageError.textContent = "Введите ваш возраст";
        hasError = true;
    } else if (inputAge.value < 0) {
        ageError.textContent = "Возраст может быть только положительным числом";
        hasError = true;
    } else {
        ageError.textContent = "";
    }
    if (inputGender.value === "") {
        genderError.textContent = "Укажите ваш пол";
        hasError = true;
    } else {
        genderError.textContent = "";
    }
    if (inputJob.value === "") {
        jobError.textContent = "Укажите вашу профессию";
        hasError = true;
    } else {
        jobError.textContent = "";
    }
    if (inputPassword.value.trim() === "") {
        passwordError.textContent = "Введите пароль";
        hasError = true;
    } else if (inputPassword.value.length < 8) {
        passwordError.textContent = "Пароль должен содержать минимум 8 символов";
        hasError = true;
    } else if (!passwordRegex.test(inputPassword.value)) {
        passwordError.textContent =
            "Пароль должен содержать содержать как минимум одну заглавную букву, одну строчную букву и одну цифру";
        hasError = true;
    } else {
        passwordError.textContent = "";
    }
    if (!inputConsent.checked) {
        consentError.textContent = "Необходимо ваше согласие на обработку персональных данных";
    } else {
        consentError.textContent = "";
    }
    if (hasError === false) {
        console.log(`Имя: ${inputName.value}`);
        console.log(`Email: ${inputEmail.value}`);
        console.log(`Возраст: ${inputAge.value}`);
        console.log(`Пол: ${inputGender.value}`);
        console.log(`Профессия: ${inputJob.value}`);
        console.log(`Пароль: ${inputPassword.value}`);
        console.log(`Дано согласие на обработку персональных данных`);
        form.reset();
    }
});
inputConsent.addEventListener("change", () => {
    submitBtn.disabled = !inputConsent.checked;
});

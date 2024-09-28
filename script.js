const button = document.getElementById("btn");
const alert = document.getElementById("alert");
const input = document.getElementById("email");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

function emailValidation() {
    input.value.match(emailRegex)
        ? (alert.style.visibility = "hidden")
        : (alert.style.visibility = "visible");
}

button.addEventListener("click", (e) => {
    emailValidation();
    e.preventDefault();
});

input.addEventListener("input", (e) => {
    emailValidation();
    e.preventDefault();
});

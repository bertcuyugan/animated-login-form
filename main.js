// https://www.youtube.com/watch?v=_ELu4zpLdHg

//tools
// https://fontawesome.com/start/confirm


const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>';
  } else {
    passwordInput.type = "password";
    togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  }
});


// to do list
// the eye is not showing the password when clicked


// challenge
// maybe try changing the styling
// maybe link to an application

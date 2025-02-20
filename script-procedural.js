const formElement = document.getElementById("user-form");
const userNameEmailElement = document.getElementById("username-email");
const userPasswordElement = document.getElementById("password");

function signupHandler(event) {
  event.preventDefault();

  const userNameEmail = userNameEmailElement.value;
  if (userNameEmail.trim() === 0) {
    alert("Please Enter Valid Name!");
  }

  const userPassword = userPasswordElement.value;
  if (userPassword.trim() <= 6) {
    alert("Password length should be 6 or longer!");
  }

  const user = {
    userNameEmail: userNameEmail,
    userPassword: userPassword,
  };

  console.log(user);
}

formElement.addEventListener("submit", signupHandler);

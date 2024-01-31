const button = document.querySelector('[type = "submit"]');

button.addEventListener("click", () => {
  const password = document.querySelector("#password");
  const passVal = password.value;

  const confirmPass = document.querySelector("#confirm-password");
  const confirmPassVal = confirmPass.value;

  const para = document.querySelector("#incorrect-password");
  console.log(para);

  if (passVal !== confirmPassVal) {
    para.textContent = "Passwords do not match";
    console.log("Incorrect");
  }
  console.log(passVal, confirmPassVal);
});

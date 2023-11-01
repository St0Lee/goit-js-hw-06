const formInfo = document.querySelector(".login-form");


formInfo.addEventListener("submit", createFormObj)

function createFormObj (event) {
  

  event.preventDefault(); //disables default features
  const  {email, password} = event.currentTarget.elements;
  if (email.value === "" || password.value === "" ) {
    const message = "Alert! All the fields should be filled."
    alert(message);
    return;
  }
  const formObj = {
    email: email.value,
    password: password.value
  };
  console.log(formObj);
  event.currentTarget.reset(); //cleanses the form
};
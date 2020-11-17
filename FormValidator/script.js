const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//functions 
//outline red and show error message
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerText = message;
}

//outline green
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Validate Email format
function checkEmail(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(re.test(input.value.trim())){
    showSuccess(input);
  }else{
    showError(input, "Invalid email");
  }
}

//check required fields
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    }else{
      showSuccess(input);
    }
  });
}

//get fieldname of input control
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check length of input field
function checkLength(input, minLen, maxLen){
  if(input.value.length < minLen){
    showError(input, `${getFieldName(input)} must be at least ${minLen} characters`);
  }else if(input.value.length > maxLen){
    showError(input, `${getFieldName(input)} must be less than ${maxLen} characters`);
  }else{
    showSuccess(input);
  }
}

//check if passwords match
function passMatch(input, input2){
  if(input.value !== input2.value){
    showError(input2, "Passwords do not match");
  }else if(input2.value === ''){
    checkRequired(input2);
  }else{
    showSuccess(input2);
  }
}

//Event Listeners
form.addEventListener("submit", function(e){
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 8, 32);
  passMatch(password, password2);
  checkEmail(email);
/*
  if(username.value === '')
  {
    showError(username, "Username is required");
  }else{
    showSuccess(username);
  }

  if(email.value === '')
  {
    showError(email, "Email is required");
  }else if(!isValidEmail(email)){
    showError(email, "Invalid email");
  }else{
    showSuccess(email);
  }
  
  if(password.value === '')
  {
    showError(password, "Password is required");
  }else{
    showSuccess(password);
P }

  if(password2.value === '')
  {
    showError(password2, "Password confirmation is required");
  }else{
    showSuccess(password2);
  }*/
});

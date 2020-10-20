const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorFn = document.getElementById('error-fn');
const errorLn = document.getElementById('error-ln');
const errorEmail = document.getElementById('error-email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
   let error = false;
 if(fName.value === '' || fName.value === null){
    errorFn.style.visibility = 'visible';
    error = true;
 } else {
    errorFn.style.visibility = 'hidden';
 }
 if(lName.value === '' || lName.value === null){
     errorLn.style.visibility = 'visible';
     error = true;
 } else{
     errorLn.style.visibility = 'hidden';
 }
 if(message.value === '' || message.value === null){
     errorMessage.style.visibility = 'visible';
     error = true;
 } else {
     errorMessage.style.visibility = 'hidden';
 }

 if(email.value === '' || email.value === null){
     errorEmail.style.visibility = 'visible';
     errorEmail.innerHTML = "Enter email address";
     error = true;
 } else if(email == /^\S+@\\S+$/g){
     errorEmail.style.visibility = 'visible';
     errorEmail.innerHTML = "Enter valid email address"
     error = true;
 } else{
     errorEmail.style.visibility = 'hidden';
 }
 if(error === true){
    e.preventDefault();
 }
   
});
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_2 = document.getElementById('password_2');


// SHOW INPUT ERROR MESSAGE 

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form__control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// SHOW SUCCESS OUTLINE 

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__control success';
}

// CHECK EMAIL IS VALID

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }
    
// CHECK REQUIRED FIELDS 

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);  
    } else {
      showSuccess(input);  
    }
  });
}

// GET FIELD NAME

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENERS 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password_2]);
});

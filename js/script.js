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


// EVENT LISTENERS 
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
});

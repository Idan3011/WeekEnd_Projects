//..............Setting Varibales..............//


const submit = document.getElementById('userForm');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const adminLogin = document.getElementById('is-admin');


let isAdmin = true;



//..............Setting addEventListener`s..............//

submit.addEventListener('submit',(e) => {
e.preventDefault();
let isValid = true;
if(userName.value.length<3){
    showError(userName,"name must be at least 3 characters long." ) 
    isValid = false;
        }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailRegex.test(email.value)){
        showError(email, 'Please enter a valid email.')
        isValid = false;
        
    }

    const passWordRegex =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(!passWordRegex.test(password.value)){
        showError(password,"Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character.")
        isValid = false;
        
    }

    if(isValid === true){
        getLocalStorage('UserName', userName.value);
        getLocalStorage('Email', email.value);
        getLocalStorage('password', password.value);
        window.location = './main.html';

    }  
    
    if(adminLogin.checked){
        isAdmin = true;
        getLocalStorage('Admin', isAdmin)
    } else{
        isAdmin = false
        getLocalStorage('Admin', isAdmin)
    }
})




//..............funcuallity..............//

function showError(input, massage){
    const errorDiv = document.getElementById(input.id+'Error');
    errorDiv.textContent = massage;
    input.classList.add('error')
}

function getLocalStorage(text, input){
    localStorage.setItem(text, input)
}


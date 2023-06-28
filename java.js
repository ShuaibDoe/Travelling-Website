const loginButton = document.getElementById("open-btn");
const loginContent = document.getElementById("login-content");
const closeButton = document.getElementById("close-btn");
const signLink = document.getElementById("sign-link");
const signUp = document.getElementById("sign-up");
const loginLink = document.getElementById("login-link");

//open login form

function displayForm(){
    if(loginContent){
        loginContent.style.display='block';
        }else{
            console.log("no content");
        }
};
loginButton.addEventListener("click", displayForm);

//close form
function closeForm(){
    if(loginContent) {
        loginContent.style.display="none";
        } else {
            console.log("No Content");
        }
};
closeButton.addEventListener("click", closeForm);

//sign up form
function signUpForm(){
    loginContent.style.display = "none";
    signUp.style.display= 'block';
};
signLink.addEventListener('click', signUpForm);

//login link
function logInForm() {
    signUp.style.display = "none";
    loginLink.style.display = "block";
    //console.log("clicked")
};
loginLink.addEventListener('click', logInForm);


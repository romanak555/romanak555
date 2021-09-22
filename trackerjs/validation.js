// const validationState = new Set();
// const loginForm = document.forms[0];


// // Function manipulates validation messages by toggling them
// function manipulateValidationMsg(validationData) {
//     const { inputProps, action } = validationData;
//     const elementValidationMsg = inputProps.nextElementSibling;
//     const validationMsgClasses = elementValidationMsg.classList;
//     const removeClass = () => {
//         validationMsgClasses.remove('hide');
//     };

//     const addClass = () => {
//         validationMsgClasses.add('hide');
//     };

//     return action === 'hide' ? addClass() : removeClass();
// }


// // Validation rules for each field in our form.
// function validationRules() {
//     return {
//         username: (inputProps) => {
//             const usernameValidationRule = /[A-Za-z0-9]{6,}/;
//             const inputValue = inputProps.value;
//             const inputName = inputProps.name;
//             const isInputValid = usernameValidationRule.test(inputValue);

//             isInputValid ? manageState().removeFromState({inputProps, inputName}) : manageState().addToState({inputProps, inputName});

//             return true;
//         },

//         password: (inputProps) => {
//             const passwordValidationRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/g;
//             const inputValue = inputProps.value;
//             const inputName = inputProps.name;
//             const isInputValid = passwordValidationRule.test(inputValue);

//             isInputValid ? manageState().removeFromState({inputProps, inputName}) : manageState().addToState({inputProps, inputName});

//             return true;
//         },

//         emptyFields: () => {
//             const formInputElems = [...loginForm.elements].filter(item => item.nodeName === 'INPUT');
//             for(const inputProps of formInputElems) {
//                 const inputName = inputProps.name;
//                 const inputValue = inputProps.value;

//                 if(!inputValue) {
//                     manageState().addToState({inputProps, inputName});
//                 } 
//             }
//         }
//     }
// }

// // Function receives an input with its properties
// function validateForm(inputProps) {
//     const inputName = inputProps.name;
//     const verifyInputName = {
//         'username': validationRules().username,
//         'password': validationRules().password
//     };

//     return verifyInputName[inputName](inputProps)
// }

// // Collection of functions for managing state
// function manageState() {
//     return {
//         addToState: (inputData) => {
//             const { inputProps, inputName } = inputData;

//             validationState.add(inputName);
//             manipulateValidationMsg({ inputProps });
//         },
//         removeFromState: (inputData) => {
//             const action = 'hide';
//             const { inputProps, inputName } = inputData;

//             validationState.delete(inputName);
//             manipulateValidationMsg({ inputProps, action})
//         },
//         validateState: () => {
//             if(validationState.size > 0) {
//                 return false;
//             }

//             if(validationState.size === 0) {
//                 validationRules().emptyFields();
//                 return true;
//             }
//         }
//     }
// };


// // Attaching 'keyup' event to the login form. 
// // Using event delegation
// function attachKeyUpEvent() {
//     loginForm.addEventListener('keyup', function(event) {
//         const nodeName = event.target.nodeName;
//         const inputProps = event.target;

//         if(nodeName === 'INPUT') {
//             validateForm(inputProps);
//         }
//     });
// }

// // The function submits the form
// function submitForm() {
//     const submitButton = document.getElementsByClassName('js-submit-user')[0];
//     submitButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         manageState().validateState();
//         // location.href = 'apps.html';
//         console.log('hereeeeeee submit')
//     });
// }

// function init() {
//     attachKeyUpEvent();
//     submitForm();
// }

// document.addEventListener('DOMContentLoaded', init);

// const userName = "admin";
// const userPass = "Admin";

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Parent" && password == "parent"){
    alert ("הורה התחבר בהצלחה");
    window.location = "budget-tracker.html"; // Redirecting to other page.
    return false;
} else if(username == "Kid" && password == "kid"){
    alert ("ילד/ה התחבר/ה בהצלחה");
    window.location = "kids.html"; // Redirecting to other page.
    return false;
}
else{
attempt --;// Decrementing by one.
alert("נותרו "+attempt+" נסיונות;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
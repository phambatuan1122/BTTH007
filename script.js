let userID = document.getElementById('txtUserID');
let statusOfUserID = document.getElementById('statusOfUserID')
userID.addEventListener('focusout', leaveUserId)

function leaveUserId(){
    var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if(userIDRegex.test(userID.value)){
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    }else{
        statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
        statusOfUserID.style.color = 'red'
    }
}
let password = document.getElementById('txtPassword');
let statusOfPassword = document.getElementById('statusOfPassword')
password.addEventListener('focusout', leavePassword)
function leavePassword(){
    var passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if(passwordRegex.test(password.value)){
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    }else{
        statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
        statusOfPassword.style.color = 'red'
    }
}
let name = document.getElementById('txtName');
let statusOfName = document.getElementById('statusOfName')
name.addEventListener('focusout', leaveName)
function leaveName(){
    var NameRegex = /^[a-zA-Z]{1,}$/
    if(NameRegex.test(name.value)){
        statusOfName.textContent = 'Name hợp lệ'
        statusOfName.style.color = 'blue'
    }else{
        statusOfName.textContent = 'Name không hợp lệ.'
        statusOfName.style.color = 'red'
    }
}
function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('Chọn quốc gia của bạn từ danh sách');
        ucountry.focus();
        return false;
    }
    else {
        return true;
    }
} 
function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    }
    else {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function validsex(umsex, ufsex) {
    x = 0;

    if (umsex.checked) {
        x++;
    } if (ufsex.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
    }
}
'use strict';

    
    
function validationForm() {
    let aName = document.myform.name.value;
    let bPassword = document.myform.password.value;
    let cEmail = document.myform.email.value;

    // Name Validation
    if (aName == null || aName == "") {
        let text = document.getElementById('nameId');
        let areaBorder = document.getElementById('nameText');
        text.innerHTML = "Please Enter the Name (कृपया अपना नाम लिखे)";
        text.style.color = "red";
        areaBorder.style.border = "2px solid red";
        return false;
    }

    // Pasword Validation
    else if (bPassword.length < 6) {
        let text = document.getElementById('paswdId');
        let areaBorder = document.getElementById('paswdText');
        text.innerHTML = "Password must be at least 6 characters long.(पासवर्ड कम से कम 6 अक्षर लंबा होना चाहिए।)";
        text.style.color = "red";
        return false;
    }

    // Email validation
    else if (cEmail.indexOf('@') <= 0) {
        let text = document.getElementById('emailId');
        let areaBorder = document.getElementById('emailText');

        text.innerHTML = "Invalid Email(सही ईमेल दर्ज़ करे )";
        text.style.color = "red";
        areaBorder.style.border = "2px solid red";
        return false;
    }
    else if (cEmail.charAt(c.length - 4) != '.') {
        text.innerHTML = "Invalid Email";
        text.style.color = "red";
        areaBorder.style.border = "2px solid red";
        return false;

    }
}

//-----------------------------------------------------FOR LOGIN PAGE TO MAKE SIGN UP AND SEND EMAIL FROM VISIBLE/INVISIBLE-------------------------------------------------
let RegisterForm = document.getElementById("loginFormRegister");
let sendEmailForm = document.getElementById("loginFormEmail");
let signUpButton = document.getElementById("loginFormButtonSignUp");
let forgotPassButton = document.getElementById("loginFormButtonForgot");

signUpButton.addEventListener("click", signUpVisible);
forgotPassButton.addEventListener("click", sendEmailVisible);

function signUpVisible(){
    console.log("sign clicked");
    RegisterForm.style.visibility = "visible";
    sendEmailForm.style.visibility = "hidden";
}

function sendEmailVisible(){
    console.log("email clicked");
    RegisterForm.setAttribute("style", "visibility: hidden;");
    sendEmailForm.setAttribute("style", "visibility: visible;");
}

//-----------------------------------------------------------Check Password-----------------------------------------------------------------------------------
let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");      //at least one lower case, upper case and number, and at least 8 characters 

function checkPassword(){

let password = document.getElementById("CreatePass").value;
let confirm = document.getElementById("CreateConfirm").value;

if(passwordRegex.test(password)){
    if(password == confirm){
        document.getElementById("feedbackPara").innerHTML = "";
        return true;
    }else {
        document.getElementById("feedbackPara").innerHTML = "Passwords don't match each other";
        return false;
    }
} else{
    document.getElementById("feedbackPara").innerHTML = "Weak password, instert at least 8 characters, 1 lower and 1 upper case, number";
    return false;
}

}

//-----------------------------------------------------------Check Name-----------------------------------------------------------------------------------------

let nameRegex = new RegExp("^(?=.*[a-zA-Z])(?=.{4,})");         //at least 4 characters

function checkName(){
    let name = document.getElementById("CreateName").value;

    if(nameRegex.test(name)){
        document.getElementById("feedbackPara").innerHTML = "";
        return true;
    } else{
        document.getElementById("feedbackPara").innerHTML = "Please insert at least 4 characters for Username";
        return false;
    }
}


//---------------------------------------------------------Check Phone-number--------------------------------------------------------------------------------------------

let phoneRegex = new RegExp( /^(\+44|0)[0-9]{10}$/);

function checkPhone(){
let phone = document.getElementById("CreatePhone").value;

if(phoneRegex.test(phone)){
    document.getElementById("feedbackPara").innerHTML = "";
    return true;
} else if(!phoneRegex.test(phone)){
    document.getElementById("feedbackPara").innerHTML = "Incorrect number. Please insert number +44... or 0...";
} else{
    document.getElementById("feedbackPara").innerHTML = "";
}
    
}


//---------------------------------------------------------Check Email-Address-------------------------------------------------------------------------------

let emailRegex = new RegExp(/^([a-zA-Z])+(\.[a-zA-Z]+)?@[a-z]+\.[a-x]{1,3}(\.[a-z]{1,3})?$/);       // firstName.lastName@mail.uk
                                                                                                    // firstName.lastName@mail.ac.uk   
function checkEmail(){                                                                              // firstname@mail.uk
let email = document.getElementById("CreateEmail").value;                                           // firstname@mail.ac.uk

if(emailRegex.test(email)){
    document.getElementById("feedbackPara").innerHTML = "";
    return true;
} else if (!emailRegex.test(email)){
    document.getElementById("feedbackPara").innerHTML = "Incorrect Email-Adress";
} else{
    document.getElementById("feedbackPara").innerHTML = "";
}

}

//-----------------------------------------------------------------Is Valid------------------------------------------------------------------------------------------------

function isValid(){
    let email = document.getElementById("CreateEmail").value;
    if(localStorage[email] == undefined){
        document.getElementById("feedbackPara").innerHTML = "";
        return true;
    }else{
        document.getElementById("feedbackPara").innerHTML = "This email-address already exist, try other email-address";
        return false;
    }
}



//-------------------------------------------------------------Add Account----------------------------------------------------------------------------------------

let myCreateButton = document.getElementById("loginFormRegisterButton");
myCreateButton.addEventListener("click", addAccount);

function addAccount(){
    let obj = {}
 
    obj.name = document.getElementById("CreateName").value;
    obj.date = document.getElementById("CreateDate").value;
    obj.pass = document.getElementById("CreatePass").value;
    obj.confirm = document.getElementById("CreateConfirm").value;
    obj.phone = document.getElementById("CreatePhone").value;
    obj.email = document.getElementById("CreateEmail").value;
    obj.score = 0;
    
    if(checkName() && checkPassword() && checkPhone() && checkEmail() && isValid()){
        localStorage[obj.email] = JSON.stringify(obj);
        document.getElementById("feedbackPara").innerHTML = "New account has been created";
    }

}

//-----------------------------------------------------------Sign in----------------------------------------------------------------------------------
let mySignInButton = document.getElementById("loginFormButton");
mySignInButton.addEventListener("click",login);

function login(){

    let email = document.getElementById("loginFormTextUser").value;
   
    if(localStorage[email] == undefined){

        document.getElementById("feedbackParaLogin").innerHTML = "The account doesn't exist, Please create account";
       
    } else{

        let userObj = JSON.parse(localStorage[email]);     
        let password = document.getElementById("loginFormTextPass").value;

        if(password == userObj.pass){

            sessionStorage.LoggedUserEmail = userObj.email;
            document.getElementById("loginForm").setAttribute("style","visibility: hidden");
            location.href="../index.php";
           
        } else{
            document.getElementById("feedbackParaLogin").innerHTML = "Email or Password is incorrect.";
        
        }
        
    }

}


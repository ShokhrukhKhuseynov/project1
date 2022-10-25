
   <?php
include("../php/common.php");
navigationBar("Login");
?>

<form  class="nav-list-and-div-and-LogoImage" action="../pages/Login.php">
                   <input id="login-image-and-text" type="submit" value="LOGIN">
               </form>
            </nav>
            </header>
        </div>
 <!----------------------------------------------------BODY-------------------------------------------------------->
 <main class="LoginSection">


    <form id="loginForm">
        <h1 id="loginHeaderText">Please Sign in.</h1>
        <input id="loginFormTextUser" type="text" name="email" placeholder="EMAIL-ADDRESS">
        <input id="loginFormTextPass" type="password" placeholder="PASSWORD">
        <button id="loginFormButton" type="button">Sign In</button>
    </form>

    <div id="loginFormRegister">
        <h1><b>Create account.</b></h1>
        <form >
        
            <input id="CreateName" class="loginFormRegisterText" type="text" name="MyName" placeholder="USERNAME" />
            <input id="CreateDate" class="loginFormRegisterText" type="date" name="MyDate" placeholder="DATE OF BIRTH"/>
            <input id="CreatePass" class="loginFormRegisterText" type="password" name="MyPassword" placeholder="PASSWORD" />
            <input id="CreateConfirm" class="loginFormRegisterText" type="password" name="MyPassword" placeholder="CONFIRM PASSWORD"/>
            <input id="CreatePhone" class="loginFormRegisterText" type="text" name="MyNumber" placeholder="PHONE NUMBER"/>
            <input id="CreateEmail" class="loginFormRegisterText" type="email" name="MyEmail" placeholder="EMAIL-ADDRESS"/>

        </form>
        <button id="loginFormRegisterButton"  type="button">Create</button> 
        </br>
        <p id="feedbackPara" style=" font-size: 15px; color: red;" ></p>
    </div>
    </br>
    <form id="loginFormExtras">
        <input id="loginFormButtonForgot" type="button" value="Forgot password?">
        <input id="loginFormButtonSignUp" type="button" value="Sign up">
        <p id="feedbackParaLogin" style="font-size: 15px; color: red; margin-left: 270px; 
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;" ></p>
    </form>

    <form  id="loginFormEmail">
        <p><b>Please enter your email address.</b></p>
        <input id="loginFormEmailText" type="email" name="email" required placeholder="Email-address" />
        <input id="loginFormEmailButton" type="submit" value="SEND" />
    </form>
    
    
</main>

<?php
footerBar("Login");
?>

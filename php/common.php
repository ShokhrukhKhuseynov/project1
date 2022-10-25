<?php

/*Navigation bar of main page has more elements in it than login page one,
navigationBar($) function that takes one argument and produce two outputs. Prints an appropriate output depending on input*/

function navigationBar($page){
    if($page == "Main"){
       echo '<!DOCTYPE html>
       <html>     
           <head>
               <title>Main Page</title>
               <link rel="stylesheet" type="text/css" href="../css/mystyle.css?v=<?php echo time(); ?>">
           </head>
       
       <body>
       <div>
        <header  id="MainSection">    
            <nav>
                <form  action="#MainSection">
                    <input type="submit" value="" class="nav-list-and-div-and-LogoImage"  id="nav-img-logo">
                </form>
                <ul class="nav-list-and-div-and-LogoImage">
                <li><a href="#section1">ABOUT</a></li>
                <li><a href="#section2">INSTRUCTION</a></li>
                <li><a href="#section3">TABLE</a></li>
               </ul>';
        
    }

    
    
    if($page == "Login"){
        echo '<!DOCTYPE html>
        <html>
        <head>
            <link href="../css/mystyle.css?v=<?php echo time(); ?>" rel="stylesheet">
            <title>Login Page</title>
        </head>
         <body id="loginPageBody">  
        <div>
        <header id="MainSection">    
            <nav>
                <form action="../index.php">
                    <input  type="submit" value="" class="nav-list-and-div-and-LogoImage" id="nav-img-logo">
                </form>
                <ul class="nav-list-and-div-and-LogoImage">
                <li><a href="../index.php#section1">ABOUT</a></li>
                <li><a href="../index.php#section2">INSTRUCTION</a></li>
                <li><a href="../index.php#section3">TABLE</a></li>
               </ul>';

    }
}

function footerbar($cond){
    if($cond == "Login"){
    echo '<footer>
    <div class="footBar">
            <form action="https://www.instagram.com/">
                <input type="submit" value="" id="twitter">
            </form>
            <form action="https://www.facebook.com/">
                <input type="submit" value="" id="facebook">
            </form>
            <form action="https://www.youtube.com/">
                <input type="submit" value="" id="youtube">
            </form> 
            <form action="https://twitter.com/">
                <input type="submit" value="" id="instagram">
            </form>
            <h2>CONTACTS</h2>
            <h3>(+44)123456789 | example@mail.com</h3>
        </div> 
        </footer>
        </body>
        <script src="../js/login.js"></script>
</html>';         
} else{
    echo '<footer>
    <div class="footBar">
            <form action="https://www.instagram.com/">
                <input type="submit" value="" id="twitter">
            </form>
            <form action="https://www.facebook.com/">
                <input type="submit" value="" id="facebook">
            </form>
            <form action="https://www.youtube.com/">
                <input type="submit" value="" id="youtube">
            </form> 
            <form action="https://twitter.com/">
                <input type="submit" value="" id="instagram">
            </form>
            <h2>CONTACTS</h2>
            <h3>(+44)123456789 | example@mail.com</h3>
        </div> 
        </footer>
        </body>
        <style>
        #tableBody tr>td{
            font-family:"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif; 
            font-size: 25px; 
            color: #767171;
        }

        #tableBody tr:hover{
            background-color: #A2D2FF;
            
        }

        #tableBody tr>td:hover{
            color: white !important;
        }
        </style>
        <script src="../js/main.js"></script>
</html>'; 
}

}


?>

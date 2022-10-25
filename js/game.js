//---------------------------------canvas--------------------------------------------------------------------------------          
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//-----------------------------------Character----------------------------------------------------------------------------            
var myImage = new Image();
myImage.src ="../images/Pixel1.png";

//-----------------------------------shortBrick----------------------------------------------------------------------------            
var shortBrick = new Image();
shortBrick.src ="../images/shortBrick.png";

//-----------------------------------longBrick----------------------------------------------------------------------------            
var longBrick = new Image();
longBrick.src ="../images/longBrick.png";

//-----------------------------------longBrickSl and shortBrickSl------------------------------------------------------------
var longBrickSl = new Image();
longBrickSl.src ="../images/longBrickSl.png";

var shortBrickSl = new Image();
shortBrickSl.src ="../images/shortBrickSl.png";

//-------------------------------------------------variables------------------------------------------------------------------------------
let jump = true;
let right = true;
let left = true;
let space = 0;
let score = 0;
var currentScore = document.getElementById("currentScore").innerHTML; 
//--------------------------------OBJECT------------------------------------
let userObj = JSON.parse(localStorage[sessionStorage.LoggedUserEmail]);
        
//--------------------------------------------Paddle---------------------------------------------------------------------
var paddleHeight = 35;
var paddleWidth = 35;
var paddleX = (canvas.width-paddleWidth) / 2;
var paddleY =(canvas.height-paddleHeight);
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
//---------------------------------------------Bricks---------------------------------------------------------------------------------
var brickWidth = 49;
var brickHeight = 22;

var longbrickWidth = 100;
         
var brickX = 400;
var brickY = canvas.height - 80;

var brick1X = 290;
var brick1Y = canvas.height - 120;

var brick2X = 190;
var brick2Y = canvas.height - 150;
          
var brick3X = 60;
var brick3Y = canvas.height - 210;

var brick4X = 180;
var brick4Y = canvas.height - 280;

var brick5X = 270;
var brick5Y = canvas.height - 350;

var brick6X = 380;
var brick6Y = canvas.height - 400;

var brick7X = 460;
var brick7Y = canvas.height - 450;

var brick8X = 380;
var brick8Y = canvas.height - 520;

var brick9X = 215;
var brick9Y = canvas.height - 520;

var brick10X = 130;
var brick10Y = canvas.height - 560;

var brick11X = 0;
var brick11Y = canvas.height - 610;
          

function drawBrick(){
    ctx.beginPath();
    ctx.rect(brickX, brickY, brickWidth, brickHeight);
    // ctx.fillStyle = "green";
    // ctx.fill();
    ctx.drawImage(shortBrick, brickX, brickY);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick1X, brick1Y, brickWidth, brickHeight);
    ctx.drawImage(shortBrick, brick1X,brick1Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick2X, brick2Y, brickWidth, brickHeight);
    ctx.drawImage(shortBrick, brick2X,brick2Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick3X, brick3Y, longbrickWidth, brickHeight);
    ctx.drawImage(longBrickSl, brick3X,brick3Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick4X, brick4Y, brickWidth, brickHeight);
    ctx.drawImage(shortBrick, brick4X,brick4Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick5X, brick5Y, brickWidth, brickHeight);
    ctx.drawImage(shortBrick, brick5X,brick5Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick6X, brick6Y, brickWidth, brickHeight);
    ctx.drawImage(shortBrick, brick6X,brick6Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick7X, brick7Y, brickWidth, brickHeight);
    ctx.drawImage(shortBrickSl, brick7X,brick7Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick8X, brick8Y, brickWidth, brickHeight);
    ctx.drawImage(shortBrick, brick8X,brick8Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick9X, brick9Y, longbrickWidth, brickHeight);
    ctx.drawImage(longBrickSl, brick9X,brick9Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick10X, brick10Y, brickWidth, brickHeight);
    ctx.drawImage(shortBrick, brick10X,brick10Y);
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(brick11X, brick11Y, longbrickWidth, brickHeight);
    ctx.drawImage(longBrick, brick11X,brick11Y);
    ctx.closePath();              
}
              
//----------------------------------------------------Setting up keys for Character--------------------------------------------------------------------------------------
function keyDownHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        if(right){
            rightPressed = true;
        }               
    } else if(e.key == "Left" || e.key == "ArrowLeft"){
        if(left){
            leftPressed = true;
        }
    } else if(e.key == "Up" || e.key == "ArrowUp"){
        if(jump){
            upPressed = true;
        }
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {

        rightPressed = false;
    } 
    else if(e.key == "Left" || e.key == "ArrowLeft") {

        leftPressed = false;
    } 
    else if(e.key == "Up" || e.key == "ArrowUp"){

            upPressed = false;
    }
}

function drawPaddle() {

    ctx.beginPath();
    ctx.rect(paddleX,paddleY , paddleWidth, paddleHeight);
    ctx.drawImage(myImage, paddleX, paddleY);
    ctx.closePath();         
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBrick();
    document.getElementById("maxScore").innerHTML = userObj.score;
    //--to move the character to right and left side by pressing keys and initializng corners-------------------------------------------------------  
    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    } else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
              
    if(upPressed){
        paddleY = space - 140;
        upPressed = false;
        if(paddleY < 0){
            paddleY = 0;
        }         
    }
    //-------------------------------------------------------to jump on the bricks--------------------------------------------------------------------          
    if(((paddleY + paddleHeight) > brickY) && ((paddleY + paddleHeight)  < brickY + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brickX) && ((paddleX + (paddleWidth / 2)) < brickX + brickWidth)){
        jump = true;
        space = brickY;
        score = 100;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);              
    }
    else if(((paddleY + paddleHeight) > brick1Y) && ((paddleY + paddleHeight)  < brick1Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick1X) && ((paddleX + (paddleWidth / 2)) < brick1X + brickWidth)){
        jump = true;
        space = brick1Y;
        score = 200;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);
    }
    else if(((paddleY + paddleHeight) > brick2Y) && ((paddleY + paddleHeight)  < brick2Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick2X) && ((paddleX + (paddleWidth / 2)) < brick2X + brickWidth)){
        jump = true;
        space = brick2Y;
        score = 350;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);      
    }
    else if(((paddleY + paddleHeight) > brick3Y) && ((paddleY + paddleHeight)  < brick3Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick3X) && ((paddleX + (paddleWidth / 2)) < brick3X + longbrickWidth)){              
        space = brick3Y;
        paddleX -= 4;
        jump = true;
        score = 500;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);   
    }
    else if(((paddleY + paddleHeight) > brick4Y) && ((paddleY + paddleHeight)  < brick4Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick4X) && ((paddleX + (paddleWidth / 2)) < brick4X + brickWidth)){
        space = brick4Y;
        jump = true;
        score = 750;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);          
    }
    else if(((paddleY + paddleHeight) > brick5Y) && ((paddleY + paddleHeight)  < brick5Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick5X) && ((paddleX + (paddleWidth / 2)) < brick5X + brickWidth)){
        space = brick5Y;
        jump = true;
        score = 1000;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);         
    }
    else if(((paddleY + paddleHeight) > brick6Y) && ((paddleY + paddleHeight)  < brick6Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick6X) && ((paddleX + (paddleWidth / 2)) < brick6X + brickWidth)){              
        space = brick6Y;
        jump = true;
        score = 1500;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);         
    }
    else if(((paddleY + paddleHeight) > brick7Y) && ((paddleY + paddleHeight)  < brick7Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick7X) && ((paddleX + (paddleWidth / 2)) < brick7X + brickWidth)){              
        space = brick7Y;
        paddleX += 4;
        jump = true;
        score = 2000;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);
    }
    else if(((paddleY + paddleHeight) > brick8Y) && ((paddleY + paddleHeight)  < brick8Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick8X) && ((paddleX + (paddleWidth / 2)) < brick8X + brickWidth)){              
        space = brick8Y;
        jump = true;
        score = 3000;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);          
    }
    else if(((paddleY + paddleHeight) > brick9Y) && ((paddleY + paddleHeight)  < brick9Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick9X) && ((paddleX + (paddleWidth / 2)) < brick9X + longbrickWidth)){              
        space = brick9Y;
        paddleX -= 4;
        jump = true;
        score = 4500;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);
    }
    else if(((paddleY + paddleHeight) > brick10Y) && ((paddleY + paddleHeight)  < brick10Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick10X) && ((paddleX + (paddleWidth / 2)) < brick10X + brickWidth)){
        space = brick10Y;
        jump = true;
        score = 6000;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);              
    }
    else if(((paddleY + paddleHeight) > brick11Y) && ((paddleY + paddleHeight)  < brick11Y + 8) &&  
    ((paddleX + (paddleWidth / 1.3)) >= brick11X) && ((paddleX + (paddleWidth / 2)) < brick11X + longbrickWidth)){
        space = brick11Y;
        jump = false;
        right = false;
        left = false;
        score = 8000;
        document.getElementById("currentScore").innerHTML = score;
        document.getElementById("maxScore").innerHTML = userObj.score;
        localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);
        completed.style.visibility = "visible";
        youScore1.innerHTML = score;
        table.style.visibility = "hidden"; 
    } 
    else{
        jump = false;
        paddleY += 7;
        space = canvas.height;

        if(paddleY + paddleHeight > canvas.height){
            paddleY = canvas.height - paddleHeight;
            jump = true;

            if(score > 0){
                localStorage[sessionStorage.LoggedUserEmail] = JSON.stringify(userObj);
                jump = false;
                right = false;
                left = false;
                gameOver.style.visibility = "visible";
                youScore.innerHTML = score;
                table.style.visibility = "hidden";
            } 
        } 
    }
             
    if(score > userObj.score){
        userObj.score = score;
    }
            
}
var interval = setInterval(draw, 40);

//------------------------------------------------------------COMPLETED AND GAMEOVER PANELS------------------------------------------------------------------------------------------

let quitButton = document.getElementById("quit");
quitButton.addEventListener("click", quit);

let restartButton = document.getElementById("restart");
restartButton.addEventListener("click", restart);

let quitButton1 = document.getElementById("quit1");
quitButton1.addEventListener("click", quit);

let restartButton1 = document.getElementById("restart1");
restartButton1.addEventListener("click", restart);

let gameOver = document.getElementById("gameOver");
let youScore = document.getElementById("yourScore");

let completed = document.getElementById("completed");
let youScore1 = document.getElementById("yourScore1");

let table = document.getElementById("table");


function quit(){

    document.location.href="../index.php";   
}

function restart(){
    
    document.location.reload();
    clearInterval(interval);
}
       
          
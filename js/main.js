let loginButton = document.getElementById("login-image-and-text");
loginButton.addEventListener("click",loginPage);

//---------------------------------------------------------Logged In(Main page)--------------------------------------------------------------------------------------------------

let myLoginForm = document.getElementById("login-image-and-text");
function test1(string){
    if(sessionStorage.length > 0){

        myLoginForm.setAttribute("style","background-image: url(./images/smile.png)");
        loginButton.innerText= string;
    } 
}
if(sessionStorage.length > 0){

    window.onload = test1(JSON.parse(localStorage[sessionStorage.LoggedUserEmail]).name);
}
//--------------------------------------------------------------------RANKING TABLE---------------------------------------------------------------------------------------

let table = document.getElementById("tableBody");
let listScores = [];

function addT(){
    
    for(let i = 0; i < localStorage.length; i++){

        let score = JSON.parse(localStorage[localStorage.key(i)]);
        listScores.push(score);  
    }

    function compare(a, b) {
        if ( a.score < b.score ){
          return -1;
        }
        if ( a.score > b.score ){
          return 1;
        }
        return 0;
      }

    let sortedList = (listScores.sort(compare)).reverse();

    for(let k = 0; k < sortedList.length; k++){

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td.textContent = sortedList[k].name;
        tr.appendChild(td);
        td1.textContent = sortedList[k].score;
        tr.appendChild(td1);
        td2.textContent = k + 1;
        tr.appendChild(td2);
        table.append(tr);
    }
   
}

window.onload = addT();

//-------------------------------------------------------TO GO LOGIN PAGE IF THERE'S NO USER LOGGED IN, ELSE STAY ON THE PAGE--------------------------------------------------------------------------------------------------------

function loginPage(){
    
    if(sessionStorage.length > 0){
        
        signOutButton.style.visibility = "visible";
    }else{

        document.location.href="./pages/Login.php";
    }
}

//---------------------------------------------------------SIGN OUT------------------------------------------------------------------------------------------------

let signOutButton = document.getElementById("signOut");
signOutButton.addEventListener("click", signOut1);

function signOut1(){

    sessionStorage.clear();
    document.location.reload();
}

//--------------------------------------------------------------------------PLAY GAME-----------------------------------------------------------------------

let playGame = document.getElementById("playText");
playGame.addEventListener("click", playGame1);

function playGame1(){
    if(sessionStorage.length > 0){

        document.location.href="./pages/game.php";
    } else{

        document.location.href="./pages/Login.php";
    }
}
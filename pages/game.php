<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Simple Jump Game</title>
            <style>
                *{padding: 0; margin: 0; }
                canvas {
                    
                    background-image: url("../images/background.jpg");
                    background-repeat: no-repeat;
                    display: block; 
                    margin: 0 auto;
                   
                }
                .animate{
                    position: absolute;
                    top: 700px;
                }

                #table{
                    position:fixed;
                    top: 40%;
                    left: 70%;
                    border: gray 3px solid;
                    border-radius: 20px;
                    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;   
                    font-size: 20px;                
                    font-style:normal;              
                    font-weight: normal;
                    padding: 20px;
                    text-align: center;
                    color: #6e7a6e;
                }

                #currentScore{
                    margin-bottom: 10px;
                    color: #49FF00;
                }

                #maxScore{
                    color: #FFE300;
                    margin-bottom: 15px;
                }

                #quitGame{
                    background-color: white;
                    border: gray 2px dotted;
                    border-radius: 20px;
                    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;   
                    font-size: 20px;                
                    font-style:normal;              
                    font-weight: normal;
                    padding: 5px;
                    color: gray;
                    transition: all 1s;


                }

                #quitGame:hover{
                    border: 2px #EC255A solid;
                    cursor: pointer;
                    color: #EC255A;
                }

                #gameOver{
                    background-color: white;
                    position: fixed;
                    top: 40%;
                    left: 40%;
                    border: 3px #87AAAA solid;
                    border-radius: 30px;
                    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;   
                    font-size: 40px;                
                    font-style:normal;              
                    font-weight: normal;
                    text-align: center;
                    padding: 25px;
                    color: #FFCE45;
                    visibility:hidden;
                }

                #gameOver p{
                    color: #EC255A;
                }

                #gameOver button{
                    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;   
                    font-size: 25px;                
                    font-style:normal;              
                    font-weight: normal;
                    text-align: center;
                    border-radius: 20px;
                    background-color: unset;
                    padding: 10px;
                    color: gray;
                    border: dotted gray 2px;
                    transition: all 0.7s;
                }

                #quit:hover{
                    border: 2px solid #EC255A;
                    cursor: pointer;
                    color: #EC255A;
                }

                #restart:hover{
                    border: 2px solid #49FF00;
                    cursor: pointer;
                    color: #49FF00;
                }

                #completed{
                    background-color: white;
                    position: fixed;
                    top: 40%;
                    left: 40%;
                    border: 3px #87AAAA solid;
                    border-radius: 30px;
                    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;   
                    font-size: 40px;                
                    font-style:normal;              
                    font-weight: normal;
                    text-align: center;
                    padding: 25px;
                    color: #FFCE45;
                    visibility:hidden;
                }

                #completed p{
                    color: #49FF00;
                }

                #completed button{
                    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;   
                    font-size: 25px;                
                    font-style:normal;              
                    font-weight: normal;
                    text-align: center;
                    border-radius: 20px;
                    background-color: unset;
                    padding: 10px;
                    color: gray;
                    border: dotted gray 2px;
                    transition: all 0.7s;
                }

                #quit1:hover{
                    border: 2px solid #EC255A;
                    cursor: pointer;
                    color: #EC255A;
                }

                #restart1:hover{
                    border: 2px solid #49FF00;
                    cursor: pointer;
                    color: #49FF00;
                }

              
                
            </style>
    </head>
    <body>
        <form id="table" action="../index.php">
            <p>Current Score</p>
            <p id="currentScore">.</p>
            <p>Top Score</p>
            <p id="maxScore"></p>
            <input id="quitGame" type="submit" value="Quit Game">
        </form>

        <div id="gameOver">
            <p>Game Over!</p>
            <article>Your Score: <b id="yourScore"></b></article>
            <button type="button" id="restart">Restart</button>
            <button type="button" id="quit">Quit</button>
        </div>

        <div id="completed">
            <p>Congratulations!</p>
            <article>Your Score: <b id="yourScore1"></b></article>
            <button type="button" id="restart1">Restart</button>
            <button type="button" id="quit1">Quit</button>
        </div>



<!-----------------------canvas in html-------------------------------------->
        <canvas id="myCanvas" width="540" height="710"></canvas>       

     </body>
     <script src="../js/game.js"></script>
   
</html>
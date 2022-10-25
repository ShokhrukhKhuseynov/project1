
<!---------------------------------------------------------Navigation bar----------------------------------------------------------------------------------------------->
<?php
include("./php/common.php"); 
    navigationBar("Main");  /*Navigation bar for Main Page*/
    
?>
<form  class="nav-list-and-div-and-LogoImage" >
                   <button id="login-image-and-text" type="button">LOGIN</button>
               </form>
               <button id="signOut">Sign Out</button>
            </nav>
            </header>
        </div>
<!---------------------------------------------------------/Navigation bar----------------------------------------------------------------------------------------------->

<!----------------------------------------------------------------Body------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------Main Section---------------------------------------------------------------------------------->
<main id="sec-main">
    <div>
        <form action="#section1">
            <input id="arrowDown-button" type="submit" value="">        <!--Arrow down button-->
        </form>
        <image><img id="main-image" src="./images/main.png"></image>    <!--Background Image-->
        <a id="playText">PLAY GAME</a>                          <!--Play game button-->
        
    </div>
</main>
 <!------------------------------------------------------------/Main Section---------------------------------------------------------------------------------->

<!--------------------------------------------------------------Section 1------------------------------------------------------------------------------->
<section id="section1">
    <div id="section-about">
        <form action="#MainSection">
            <input type="submit" value="" id="aboutArrowUp">   <!--Arrow up button-->
        </form>
        
        <image><img src="./images/about.PNG" class="aboutImage"></image>     <!--Image-->
        <div class="aboutText">
            <h3>Game Descprition</h3>       <!--Title-->
        <p ><b>Simple Jump</b> is a vertical platform game in which the player controls a character. The character has to   <!--Description Paragraph-->
            jump constantly up through blocks to reach the top of the stage, but if he misses the jump, then they
            fall down to the bottom block and will need to starts jumping again, the aim is to get to the top and move
            to the next stage. There are 4 stages in the game, whereby players have to complete all of them in order
            to get the highest score. Points will be given by jumping onto a block, the higher block, the more
            points andthe higher the final score. By completing onestage, the player will automatically be transferred
            to the next stage, which is more difficult than the previous one.</p>
        </div>
    
        <form action="#section2">
            <input type="submit" value="" id="aboutArrowDown">      <!--Arrow down button-->
        </form>
    </div>
</section>
<!--------------------------------------------------------------/Section 1------------------------------------------------------------------------------->


<!--------------------------------------------------------------Section 2------------------------------------------------------------------------------->

<section id="section2">
    <div id="sectionInstruction">
        <form action="#section1">
            <input type="submit" value="" id="InsArrowUp">      <!--Arrow up button-->
        </form>
        <image><img src="./images/Instruction.jpg" class="InsImage"></image>     <!--Image-->
        <div class="InsText">
            <h3>How to play</h3>     <!--Title-->
        <p >The character can move left, right side and jump, and is controlled by pressing <b>left</b> and <b>right</b> <!--Description Paragraph-->
            arrow keys and <b>Space</b> for jumping</p>
        </div>
        <form action="#section3">
            <input type="submit" value="" id="InsArrowDown">        <!--Arrow down button-->
        </form>
    </div>
</section>
<!--------------------------------------------------------------/Section 2------------------------------------------------------------------------------->

<!--------------------------------------------------------------Section 3------------------------------------------------------------------------------->

<section id="section3">
    <div id="sectionTable">
        <form action="#section2">
            <input type="submit" value="" id="TableArrowUp">        <!--Arrow down button-->
        </form>
        <h2>RANKING TABLE</h2>        <!--Header for table-->
        <table class="RankingTable">
            <tbody id="tableBody">
                <tr id="row1">                <!--Table-->
                    <th>PLAYER</th>
                    <th>SCORE</th>
                    <th>POSITION</th>
                </tr>
        
            </tbody>
        </table>
    </div>
</section>



<!--------------------------------------------------------------/Section 3------------------------------------------------------------------------------->
<!--------------------------------------------------------------/Body------------------------------------------------------------------------------->


<!--------------------------------------------------------------Footer------------------------------------------------------------------------------->
<?php
footerBar("Main");
?>
<!--------------------------------------------------------------/Footer------------------------------------------------------------------------------>


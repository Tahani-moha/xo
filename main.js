console.log("Week 4 - Day 5 | Project - 1 [11:45 PM] ");

$(document).ready(function () {
  const cells = $(".cell");

  const winnerSpan = $("#winner");
  const turnSpan = $("#turn");
  const winnerPar = $("#parWinner");
  const turnPar = $("#parTurn");

  const restartButton = $("#restart");
  // console.log(cells);
  let turn = "X";
  const O = "O";
  const X = "X";
  

  cells.click(cellClicked);
  restartButton.click(restartTheGame);

  winnerPar.hide();
  restartButton.hide();

  function cellClicked() {
    // console.log(this);
    // this => DOM
    if ($(this).text() === "") {
      if (turn === X) {
        $(this).text(X);
        turnSpan.text(O);
        checkWinner(X);
        turn = O;
      } else {
        $(this).text(O);
        turnSpan.text(X);
        checkWinner(O);
        turn = X;
      }
      // checkWinner(turn);  next player
    } else {
      $(this).css("background-color", "red");
      setTimeout(() => {
        $(this).css("background-color", "white");
      }, 250);
    }
  }

  function restartTheGame() {
    console.log("restart called");
    location.reload();
   
  }

  function checkWinner(currentPlayer) {
    /* - | \ /
    0 1 2
    3 4 5
    6 7 8
    */
    // console.log(cells);
    // Check Horizontal
    if (
      $(cells[0]).text() === $(cells[1]).text() &&
      $(cells[1]).text() === $(cells[2]).text() &&
      $(cells[0]).text() !== ""
    ) {
      playerWin(currentPlayer);
      $(calls[0]).css("background-color", "green");
      $(cells[1]).css("background-color", "green");
      $(cells[2]).css("background-color", "green");
      
     

    } else if (
      $(cells[3]).text() === $(cells[4]).text() &&
      $(cells[4]).text() === $(cells[5]).text() &&
      $(cells[3]).text() !== ""
    ) {
      playerWin(currentPlayer);
      $(cells[3]).css('background-color', 'green')
      $(cells[4]).css('background-color', 'green')
      $(cells[5]).css('background-color', 'green')

    } else if (
      $(cells[6]).text() === $(cells[7]).text() &&
      $(cells[7]).text() === $(cells[8]).text() &&
      $(cells[6]).text() !== ""
    ) {
      playerWin(currentPlayer);
      return  
      $(calls[0]).css("background-color", "green");
      $(cells[1]).css("background-color", "green");
      $(cells[2]).css("background-color", "green");

      // Start check Vertical
    } else if (
      $(cells[0]).text() === $(cells[3]).text() &&
      $(cells[3]).text() === $(cells[6]).text() &&
      $(cells[0]).text() !== ""
    ) {
      playerWin(currentPlayer);
      $(calls[0]).css("background-color", "green");
      $(cells[3]).css("background-color", "green");
      $(cells[6]).css("background-color", "green");

    } else if (
      $(cells[1]).text() === $(cells[4]).text() &&
      $(cells[4]).text() === $(cells[7]).text() &&
      $(cells[1]).text() !== ""
    ) {
      playerWin(currentPlayer);
      $(calls[1]).css("background-color", "green");
      $(cells[4]).css("background-color", "green");
      $(cells[7]).css("background-color", "green");

    } else if (
      $(cells[2]).text() === $(cells[5]).text() &&
      $(cells[5]).text() === $(cells[8]).text() &&
      $(cells[2]).text() !== ""
    ) {
      playerWin(currentPlayer);
      $(calls[2]).css("background-color", "green");
      $(cells[5]).css("background-color", "green");
      $(cells[8]).css("background-color", "green");

      // Diagonal  0 4 8   2 4 6
    } else if (
      $(cells[0]).text() === $(cells[4]).text() &&
      $(cells[4]).text() === $(cells[8]).text() &&
      $(cells[0]).text() !== ""
    ) {
      playerWin(currentPlayer);
      $(calls[0]).css("background-color", "green");
      $(cells[4]).css("background-color", "green");
      $(cells[8]).css("background-color", "green");

    } else if (
      $(cells[2]).text() === $(cells[4]).text() &&
      $(cells[4]).text() === $(cells[6]).text() &&
      $(cells[2]).text() !== ""
    ) {
      playerWin(currentPlayer);
      $(calls[2]).css("background-color", "green");
      $(cells[4]).css("background-color", "green");
      $(cells[6]).css("background-color", "green");
      

    } else {
      

      // Do nothing
      // you need do think about for draw
      // console.log('DRAW');
    }
  
  }
  function playerWin(theWinner) {
    winnerSpan.text(theWinner);
   
    turnPar.hide();
    winnerPar.show();
    restartButton.show();
    $(calls).css("color", "red");

    if($('#winner').text()==='X' || $('#winner').text( )==='O') 
      for (let i = 0; i < cells.length; i++) {
        if ($(cells[i]).text() ==='') {
          $(cells[i]).off('click');
        
        }
        
      }
    };
  
   // cell.preventDefault();    // يخلي الفاير يكتب بس 
   /*  click.preventDefault(); */ // يخلي الفاير يكتب بس 
    /* cell.removeEventListener();

  //unClick()

   //}

  // حدف الضفط كلو 
  /*
   $cells.addEventListener("click", function(event){
   
    event.preventDefault() 
    } 
   );
*/ 

 });

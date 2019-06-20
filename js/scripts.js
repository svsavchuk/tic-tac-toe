var grid = ["0","1","3","4","5","6","7","8","9",]

$(document).ready(function(){
  var players = 1;
  var turns = 0;

  function reset()

  function playersSwitch(){
      if (players === 1) {
        players = 2;
      } else {
        players = 1;
      }
  }

  function winCheck(x,y,z){
    if (grid[x] === grid[y] && grid [x] === grid [z]] && grid[x] != "[ ]") {
      alert(grid[x] + " wins!");
      reset ();
    }
  }

  function win (){
    winCheck (0,1,2);
    winCheck (3,4,5);
    winCheck (6,7,8);
    winCheck (0,3,6);
    winCheck (1,4,7);
    winCheck (2,5,8);
    winCheck (0,4,8);
    winCheck (2,4,6);
  }

  if (turns === 9){
    alert ("Draw!");
    reset ();
  }

  $(".square").click(function(){
    // Get square ID.
    var squareId = $(this).attr("id");
    // Write a "O" or "X" to the grid.
    function gridWrite (){

    // Write a "O" or "X" to the array.

    // gridWrite ($(this).attr("id"));
    playerSwitch();
  });
});

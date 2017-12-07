function Player(name, roll, turn, total) {
  this.name = name;
  this.roll = roll;
  this.turn = turn;
  this.total = total;
};

Player.prototype.newRoll = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  this.roll = roll;
};

Player.prototype.addRoll = function() {
  if (this.roll === 1) {
    this.turn = 0;
  } else {
    this.turn += this.roll;
  }
};

Player.prototype.addTurn = function() {
      this.total += this.turn;
      this.turn = 0;
};

$(document).ready(function() {
  var playerOne = new Player(name, 0, 0, 0);
  var playerTwo = new Player(name, 0, 0, 0);

  // populates dice roll for player 1 and adds to turn score
  $("#rollOne").click(function() {
    playerOne.newRoll();
    playerOne.addRoll();

    $(".roll-player1").text(playerOne.roll);
    $(".turn-player1").text(playerOne.turn);

    // changes turn
    if (playerOne.roll === 1) {
      $("#rollOne").prop('disabled', true);
      $("#rollTwo").prop('disabled', false);
    }

  });
  // populates dice roll for player 2 and adds to turn score
  $("#rollTwo").click(function() {
    playerTwo.newRoll();
    playerTwo.addRoll();

    $(".roll-player2").text(playerTwo.roll);
    $(".turn-player2").text(playerTwo.turn);

    // changes turn
    if (playerTwo.roll === 1) {
      $("#rollTwo").prop('disabled', true);
      $("#rollOne").prop('disabled', false);
    }

  });

  // changes turn when player 1 clicks hold
  $("#holdOne").click(function() {
    playerOne.addTurn();
    $(".total-player1").text(playerOne.total);
    $("#rollOne").prop('disabled', true);
    $("#rollTwo").prop('disabled', false);
  });

  // changes turn when player 2 clicks hold
  $("#holdTwo").click(function() {
    playerTwo.addTurn();
    $(".total-player2").text(playerTwo.total);
    $("#rollTwo").prop('disabled', true);
    $("#rollOne").prop('disabled', false);
  });
});

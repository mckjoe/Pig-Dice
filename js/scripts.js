function Player(name, roll, score) {
  this.name = name;
  this.roll = roll;
  this.score = score;
};

Player.prototype.newRoll = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  this.roll = roll;
};

Player.prototype.addRoll = function() {
  if (this.roll === 1) {
    this.roll === 0;
  } else {
    this.score += this.roll;
  }
};

$(document).ready(function() {
  var playerOne = new Player(name, 0, 0);
  var playerTwo = new Player(name, 0, 0);


  $("#rollOne").click(function() {
    playerOne.newRoll();
    playerOne.addRoll();

    $(".roll-player1").text(playerOne.roll);
    $(".total-player1").text(playerOne.score);

    if (playerOne.roll === 1) {
      $("#rollOne").prop('disabled', true);
      $("#rollTwo").prop('disabled', false);
    }

  });

  $("#rollTwo").click(function() {
    playerTwo.newRoll();
    playerTwo.addRoll();

    $(".roll-player2").text(playerTwo.roll);
    $(".total-player2").text(playerTwo.score);

    if (playerTwo.roll === 1) {
      $("#rollTwo").prop('disabled', true);
      $("#rollOne").prop('disabled', false);
    }

  });

  $("#holdOne").click(function() {

  });

  $("#holdTwo").click(function() {

  })
});

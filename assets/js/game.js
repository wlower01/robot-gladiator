var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth. playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    /*Suntract the value of playerAttack from the value of
    enemyHealth and use that result to update the value in the
    enemy health variable*/
    enemyHealth = enemyHealth - playerAttack
    //log a resulting message to the console for confirmation
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //do step 1 again but for playerHealth and enemyAttack
        playerHealth = playerHealth - enemyAttack;
    //log another message
    enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
  };

  
fight();
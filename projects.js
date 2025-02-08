function lifeInWeeks() {
  var yourAge = prompt("How old are you?");
  var daysLeft = 90 * 365 - yourAge * 365;
  var weeksLeft = 90 * 52 - yourAge * 52;
  var monthsLeft = 90 * 12 - yourAge * 12;

  alert(
    "You have " + daysLeft +
      " days, " +
      weeksLeft +
      " weeks, " +
      monthsLeft +
      " months left."
  );
}

function bmiCalculator() {
    var weight = prompt("How much do you weigh in kg?");
    var height = prompt("What is your height in metres? e.g 1.65");
    var bmi = Math.round(weight / height ** 2);
    if (bmi<18.5){
      alert( "your BMI is "+ bmi + ". You are underwight. ");
  } else if (bmi >= 18.5 && bmi <= 24.9){
      alert( "your BMI is "+ bmi + ". You are normal. ");
  } else if (bmi > 24.9){
      alert( "your BMI is "+ bmi + ". You are overweight. ");
  };
}

function dogAge(){
var dogAge = prompt("How old is your dog");
var humanAge = ((dogAge-2)*4)+21;
alert("Your dog is " + humanAge + " in human age.");
}

function loveScore() {
  var yourName= prompt ("Your name?");
var FirstPart = yourName.slice (0,1);
var upperCaseFirstPart = FirstPart.toUpperCase();
var restOfTheName = yourName.slice (1, yourName.length);
var captilazedYourName = upperCaseFirstPart + restOfTheName;
  var crushName= prompt ("Crush Name?");
  var FirstPart = crushName.slice (0,1);
  var upperCaseFirstPart = FirstPart.toUpperCase();
  var restOfTheName = crushName.slice (1, crushName.length);
  var captilazedCrushName = upperCaseFirstPart + restOfTheName;
var loveScore = Math.random ();
loveScore=loveScore*100;
loveScore=Math.floor(loveScore);

if (loveScore> 70) {
  alert("WOW!!! It's a keeper! " + captilazedYourName+ " and " + captilazedCrushName + " " + loveScore + " % match");
};

if (loveScore >30 && loveScore <=70) {
  alert("Great match! "+ captilazedYourName+ " and " + captilazedCrushName + " " + loveScore + " % match");
};

if (loveScore <=30 ){
  alert("It's a maybe! " + captilazedYourName+ " and " + captilazedCrushName + " " + loveScore + " % match");
};
}

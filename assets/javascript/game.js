$( document ).ready(function(){

//score holders
var wins = 0;
var losses = 0;
var totalScore = 0;

var numberOptions = [3, 4, 5, 6, 7, 8, 9]; // 7 number array
numberOptions.sort(function(a, b){return 0.5 - Math.random()}); // simple array shuffler
var getComputerNumber = function (){
computerNumber= Math.floor(Math.random() * 31 + 32); // randon computer number generator
}
var newNumber = getComputerNumber();

// sends values to the html page on initiation
$("#random-number").text(computerNumber);
$("#losses").text("losses: " + losses);
$("#wins").text("wins: " + wins);
$("#user-score").text(totalScore);

// actions during reset
function reset(){
  getComputerNumber(); // generates new computer number
  $("#random-number").text(computerNumber); // updates vlaue
  $("#user-score").text(totalScore); // same
  numberOptions.sort(function(a, b){return 0.5 - Math.random()}); // reshuffles 7 number array
  console.log(numberOptions)
}

// actions after win
function won(){
  wins++; // adds wins
  totalScore = 0; // resets total score
  $("#wins").text("wins: " + wins); //updates wins
  $("#user-score").text(totalScore); // and total score    
  reset() // run the reset
  alert("YOU WON!")
}

// actions after lost
function lost(){
  losses++; // adds losses
  totalScore = 0; // the rest similar to won()
  $("#losses").text("losses: " + losses);
  $("#user-score").text(totalScore);    
  reset() 
  alert("You lost... try again!")
}
console.log(numberOptions)

// blue crystal
$("#blue").on("click", function() {
       totalScore=totalScore+numberOptions[0] // grabs the index value "0" of the reshuffled 7 number array
        $("#user-score").text(totalScore); // updates total score
        console.log(numberOptions[0]);
    if (totalScore === computerNumber) {   //  if else logic to grab particular function    
         won()
      }    
      else if (totalScore >= computerNumber) {       
        lost()  
      }
}) 

// purple crystal
$("#purple").on("click", function() {
  totalScore=totalScore+numberOptions[1] // index [1] 
   $("#user-score").text(totalScore);
console.log(numberOptions[1]);
if (totalScore === computerNumber) {          
    won()
 }    
 else if (totalScore >= computerNumber) {       
   lost()  
 }
}) 

// red
$("#red").on("click", function() {
  totalScore=totalScore+numberOptions[2] // [2]
   $("#user-score").text(totalScore);
   console.log(numberOptions[2]);
if (totalScore === computerNumber) {          
    won()
 }    
 else if (totalScore >= computerNumber) {       
   lost()  
 }
}) 

// yellow
$("#yellow").on("click", function() {
  totalScore=totalScore+numberOptions[3] // [3]
   $("#user-score").text(totalScore);
   console.log(numberOptions[3]);
if (totalScore === computerNumber) {          
    won()
 }    
 else if (totalScore >= computerNumber) {       
   lost()  
 }
});

});











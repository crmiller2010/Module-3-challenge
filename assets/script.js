// Assignment code here
var chars = "abcdefghijklmnopqustuvwxyz";
var upchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers="123456789";
var spchars="!@#$%^&*";

var confLength = "" ;
var confSpchars;
var confNumbers;
var confUpchars;
var confChars;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
     confLength = prompt("choose between 8 and 128 characters for your password?");

    while(confLength <= 7 || confLength >= 129) {
      alert("Password must be between 8-128 characters");
       confLength = (prompt("How many characters would you like your password to contain?"));
      } 
     
     confSpchars = confirm("Would you like special characters?");
     confNumbers = confirm("Would you linke numbers?");    
     confChars = confirm("Would you ike lower case characters?");
     confUpchars = confirm("Would you like upper case characters?");
   

      
      var passwordCharacters = []
      
    if (confSpchars) {
      passwordCharacters = passwordCharacters + (spchars)
    }

    if (confNumbers) {
      passwordCharacters = passwordCharacters + (numbers)
    }
      
    if (confChars) {
      passwordCharacters = passwordCharacters + (chars)
    }

    if (confUpchars) {
      passwordCharacters = passwordCharacters + (upchars)
    }

      console.log(passwordCharacters)

      
      var randomPassword = ""
      
      for (var i = 0; i < confLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
    }

function writePassword(){ 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
